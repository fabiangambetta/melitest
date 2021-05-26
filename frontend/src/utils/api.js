import axios from 'axios';

const serverUrl = 'http://localhost:4001';
const api = `${serverUrl}/api`;

/* Búsqueda de elementos por la cadena de búsqueda */

function searchItems(querysearch){
    var promise = new Promise(function(resolve,reject)
    {
        let url = api + '/items?q=' + querysearch;
        sendRequest(url)
        .then(function (data) {
            resolve(data);
        })
        .catch(function (err) {
            reject(err);
        })
    });
    return promise;
}

/* Búsqueda de un elemento por ID */
function searchItemById(id) {
    var promise = new Promise(function (resolve, reject) {
        let url = api + '/items/' + id;
        sendRequest(url) 
        .then(function (data) {
            resolve(data);
        })
        .catch(function (err) {
            reject(err);
        })
    })
    return promise;
}

/**Función genérica encargada de procesar los requests */
function sendRequest(url) {
    var promise = new Promise(function (resolve, reject) {
        axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(url)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
    return promise;
}

const API = {
    searchItems: searchItems,
    searchitem: searchItemById

};

export default API;