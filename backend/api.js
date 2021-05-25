

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const ItemBuilder = require("./utils/builder.js");
const MELI_API = require("./utils/meli_api.js");

const app = express();

/* SE HABILITAN LOS CORS PARA localhost:3000 */

app.use(cors());
app.options('http://localhost:3000/', cors());


app.get('/', function (req, res) {
    res.send("IT'S ALIVE!!!!")
});

app.get('/api/items', cors(), function (req, res) {

    console.log("ITES");
    let searchquery = req.query.q;
    let endpoint = MELI_API.GET_SEARCH_URL(searchquery);
    console.log(endpoint);
    axios.get(endpoint)
        .then(function (response) {
            ItemBuilder.BuildItems(response.data).then(function (data) {
                res.send(data);
            })
        }).
        catch(function (err) {
            console.log(err);
        })
});

app.get('/api/items/:id', cors(), function (req, res) {
        let itemid = req.params.id;
        let endpoint = MELI_API.GET_ITEM_URL(itemid);
        console.log(endpoint);
        axios.get(endpoint).then(function (response) {
            console.log("data api");
            ItemBuilder.BuildItem(response.data).
            then(function (data) {
                res.send(data);
            })
            .catch(function (data) {
                console.log("ERROR 1")
                res.send(data);
            })
        })
});

app.listen(4001, () => {
    console.log('server on port 4001');
});
