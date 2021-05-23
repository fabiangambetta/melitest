/* TRANSFORMAR LA INFORMACIÓN RECUPERADA DESDE LA API DE MELI
AL FORMATO ESPECÍFICADO */

const axios = require('axios');
const MELI_API = require("./meli_api.js");

const getCategories = function (filters) {
    return new Promise(function (resolve, reject) {
        let categories = [];
        for (var i = 0; i < filters.length; i++) {
            var filter = filters[i];
            if (filter.id === "category" && filter.values.length > 0) {
                categories = filter.values[0].path_from_root.map(function (value) {
                    return value.name
                })
            }
        }
        resolve(categories);
    });
}

function BuildItems(items) {
    return new Promise(function (resolve, reject) {
        var result = {};
        result.author = { name: "Fabián", lastname: "Gambetta" };
        result.categories = {};
        result.items = [];

        var promises = items.map(function(item){
            return BuildItem(item);
          });


        Promise.all(promises).then(function(items){
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
                reject(response);
            });
    });
}

function BuildItemWithAuthor(data)
{
    return new Promise(function(resolve,reject)
    {
        let result = {};
        BuildItem(data).then(function(item)
        {
            console.log("A8")
            result.author = { name: "Fabián", lastname: "Gambetta" };
            result.item = item;
            resolve(result);
        })
        .catch(function(){
            console.log("Error2");
            reject(result);
        })
    })
}

function BuildItem(data) {
    console.log("BuildItem ");
    var promise = new Promise(function (resolve, reject) {
        let result = {};
        console.log("A1")
        result.id = data.id;
        result.title = data.title;
        result.price = {};
        result.price.amount = data.price;
        result.condition = data.condition;
        result.sold_quantity = data.sold_quantity;
        result.free_shipping = data.shipping.free_shipping;
        console.log("A2")
        if(data.pictures && data.pictures.length>0)
            result.picture = data.pictures[0].url;
        console.log("A3")
        let CurrencyProm = getCurrency(data.currency_id)
            .then(
                function (response) {
                    console.log("A4")
                    result.price.currency = response.symbol;
                    result.price.decimals = response.decimals;
                }
            )
        let DescriptionProm = getDescription(data.id)
            .then(
                function (description) {
                    console.log("A5")
                    result.description = description;
                }
            )
        Promise.all([CurrencyProm, DescriptionProm]).then(function () {
            console.log("A6")
            resolve(result);
        })
        .catch(function (err) {
            console.log("A7");
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