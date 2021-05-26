

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const ItemBuilder = require("./utils/builder.js");
const MELI_API = require("./utils/meli_api.js");

const app = express();

/* SE HABILITAN LOS CORS PARA localhost:3000 */

app.use(cors());
app.options('http://localhost:3000/', cors());

const error = function(res,errorMessage){
    return res.status(404).json({ error: errorMessage });
}

app.get('/', function (req, res) {
    res.send("IT'S ALIVE!!!!")
});


/* Ruta para obtener los elementos de que coínciden con la búsqueda */
app.get('/api/items', cors(), function (req, res) {
    let searchquery = req.query.q;
    let endpoint = MELI_API.GET_SEARCH_URL(searchquery);
    axios.get(endpoint)
        .then(function (response) {
            ItemBuilder.BuildItems(response.data,true).then(function (data) {
                res.send(data);
            })
            .catch(function(response){

            })
        }).
        catch(function (err) {
            error(res,"error al recuperar los elementos");
        })
});

/* Ruta para obtener un elemento por ID*/
app.get('/api/items/:id', cors(), function (req, res) {
        let itemid = req.params.id;
        let endpoint = MELI_API.GET_ITEM_URL(itemid);
        axios.get(endpoint).then(function (response) {
            ItemBuilder.BuildItem(response.data).
            then(function (data) {
                res.send(data);
            })
            .catch(function (data) {
                res.send(data);
            })
        })
        .catch(function(err){
            error(res,"error al recuperar el elemento");
        })
});

app.listen(4001, () => {
    console.log('server on port 4001');
});
