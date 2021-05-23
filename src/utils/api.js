import axios from 'axios';

const serverUrl = 'http://localhost:4001';
const api = `${serverUrl}/api`;


function searchItems(querysearch){

    console.log("searchItems");
    var promise = new Promise(function(resolve,reject)
    {
        let url = api + '/items?q=' + querysearch;
        sendRequest(url)
        .then(function (data) {
            console.log("searchItemById - resolve");
            resolve(data);
        }).
        catch(function (err) {
            console.log("searchItemById - reject");
            reject(err);
        })
    });
    return promise;
}


function searchItemById(id) {
    console.log("searchItemById");
    var promise = new Promise(function (resolve, reject) {
        let url = api + '/items/' + id;
        sendRequest(url) 
        .then(function (data) {
            console.log("searchItemById - resolve");
            resolve(data);
        }).
        catch(function (err) {
            console.log("searchItemById - reject");
            reject(err);
        })
    })
    return promise;
}

function sendRequest(url) {
    console.log("sendRequest");
    var promise = new Promise(function (resolve, reject) {
        axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(url)
            .then(function (response) {
                console.log("sendRequest - resolve");
                resolve(response.data);
            })
            .catch(function (error) {
                console.log("sendRequest - reject");
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