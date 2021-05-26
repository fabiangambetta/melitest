/* TRANSFORMAR LA INFORMACIÓN RECUPERADA DESDE LA API DE MELI
AL FORMATO ESPECÍFICADO */

const axios = require('axios');
const MELI_API = require("./meli_api.js");

const getCategories = function(filters){
    return new Promise(function(resolve, reject){
      let categories = [];
      for(var i=0;i<filters.length;i++){
        var filter = filters[i];
        if(filter.id === "category" && filter.values.length > 0){
          categories = filter.values[0].path_from_root.map(function (value) {
            return value.name
          })
        }
      }
      resolve(categories);
    });
  }

  const getCategoriesById = function(category_id)
  {
    return new Promise(function(resolve, reject){
        let categories = [];
        const urlApiCategory = MELI_API.GET_CATEGORIES_URL(category_id);
        axios.get(urlApiCategory)
        .then(function(response){
            console.log(response.data.path_from_root)
            categories = response.data.path_from_root.map(function(value) {
                return value.name
			});
            resolve(categories);
        })
        .catch(function(err){
            reject("error")
        })
        
    }
    );
  }

function BuildItems(data) {
    return new Promise(function (resolve, reject) {
        let items = data.results;
        var result = {};
        result.author = { name: "Fabián", lastname: "Gambetta" };
        result.categories = {};
        result.items = [];
        let promises = items.map(function(item){
            return BuildItem(item,true);
          });
        let catpromise = getCategories(data.filters).then(
            function(cats)
            {
                result.categories = cats;
            }
        )
        Promise.all(promises,catpromise).then(function(items){
            result.items = items;
            resolve(result);
        })
        .catch(function(err)
        {
            reject(err);
        })
    })
}

const getDescription = function (itemId) {
    return new Promise(function (resolve, reject) {
        const urlApiItemDescription = MELI_API.GET_DESCRIPTION_URL(itemId);
        axios.get(urlApiItemDescription)
            .then(function (response) {
                resolve(response.data.plain_text);
            })
            .catch(function (response) {
                console.log("ERROR 8")
                reject(response);
            });
    });
}

const getCurrency = function (currency_id) {
    return new Promise(function (resolve, reject) {
        const urlCurrencyUrl = MELI_API.GET_CURRENCY_URL(currency_id);
        axios.get(urlCurrencyUrl)
            .then(function (response) {
                let currency = {};
                currency.symbol = response.data.symbol;
                currency.decimals = response.data.decimal_places;
                resolve(currency);
            })
            .catch(function (response) {
                console.log("ERROR 7")
                reject(response);
            });
    });
}

function BuildItemWithAuthor(data)
{
    return new Promise(function(resolve,reject)
    {
        console.log("111111")
        let result = {};
        let buildpromise = BuildItem(data).then(function(item)
        {
            console.log("222222")
            result.author = { name: "Fabián", lastname: "Gambetta" };
            result.item = item;
        })
        .catch(function(){
        })
        let promisecategory = getCategoriesById(data.category_id).then(function(data){
            result.categories = data;
        })
        .catch(function(){

        })
        Promise.all([buildpromise,promisecategory]).then(
            function(){
                resolve(result);
            }
        )
        .catch(function(){
            reject(result);
        })
    })
}

function BuildItem(data, thumbnail = false) {

    var promise = new Promise(function (resolve, reject) {
        let result = {};
        result.id = data.id;
        result.title = data.title;
        result.price = {};
        result.price.amount = data.price;
        result.condition = data.condition;
        result.sold_quantity = data.sold_quantity;
        result.free_shipping = data.shipping.free_shipping;
        result.address = data.seller_address.state.name;
        if(!thumbnail && data.pictures && data.pictures.length>0){
            result.picture = data.pictures[0].url;
        }
        else
        {
            let src_aux = data.thumbnail; //.replace('-I','-O')
            result.picture = src_aux;
        }
        let CurrencyProm = getCurrency(data.currency_id)
            .then(
                function (response) {
                    result.price.currency = response.symbol;
                    result.price.decimals = response.decimals;
                }
            ).catch(function(){

            })
        let DescriptionProm = getDescription(data.id)
            .then(
                function (description) {
                    result.description = description;
                }
            ).catch(function(err){
                console.error(err);
            })
        Promise.all([CurrencyProm, DescriptionProm]).then(function () {
            resolve(result);
        })
        .catch(function (err) {
            reject(result);
        })
    });
    return promise;
}
const ItemBuilder = {
    BuildItem: BuildItemWithAuthor,
    BuildItems: BuildItems
};

module.exports = ItemBuilder;