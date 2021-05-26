const API_URL = "https://api.mercadolibre.com";
const SEARCH = `${API_URL}/sites/MLA/search?limit=4&q=:query`;
const ITEM = `${API_URL}/items/:id`;
const ITEM_DESCRIPTION = `${API_URL}/items/:id/description`;
const CURRENCY = `${API_URL}/currencies/:id`;
const CATEGORIES =`${API_URL}/categories/:id`;



const GET_CATEGORIES_URL = (catid) =>{
    return CATEGORIES.replace(':id',catid);
}

const GET_ITEM_URL = (itemid) =>{
   return ITEM.replace(':id',itemid);
}
  
const GET_SEARCH_URL = (query) => {
    return SEARCH.replace(':query',query);
}

const GET_DESCRIPTION_URL = (itemid) =>{
    return ITEM_DESCRIPTION.replace(':id',itemid);
}

const GET_CURRENCY_URL = (currencyid) => {
    return CURRENCY.replace(':id',currencyid);
}

const ENDPOINTS_URL = {
    GET_ITEM_URL:GET_ITEM_URL,
    GET_SEARCH_URL:GET_SEARCH_URL,
    GET_DESCRIPTION_URL:GET_DESCRIPTION_URL,
    GET_CURRENCY_URL:GET_CURRENCY_URL,
    GET_CATEGORIES_URL:GET_CATEGORIES_URL
}
module.exports = ENDPOINTS_URL;