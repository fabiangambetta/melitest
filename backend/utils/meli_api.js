const API_URL = "https://api.mercadolibre.com";

const ENDPOINTS = {
  SEARCH: `${API_URL}/sites/MLA/search?limit=4&q=:query`,
  ITEM: `${API_URL}/items/:id`,
  ITEM_DESCRIPTION: `${API_URL}/items/:id/description`,
  CURRENCY: `${API_URL}/currencies/:id`
};

const GET_ITEM_URL = (itemid) =>{
   return ENDPOINTS.ITEM.replace(':id',itemid);
}
  
const GET_SEARCH_URL = (query) => {
    return ENDPOINTS.SEARCH.replace(':query',query);
}

const GET_DESCRIPTION_URL = (itemid) =>{
    return ENDPOINTS.ITEM_DESCRIPTION.replace(':id',itemid);
}

const GET_CURRENCY_URL = (currencyid) => {
    return ENDPOINTS.CURRENCY.replace(':id',currencyid);
}

const ENDPOINTS_URL = {
    GET_ITEM_URL:GET_ITEM_URL,
    GET_SEARCH_URL:GET_SEARCH_URL,
    GET_DESCRIPTION_URL:GET_DESCRIPTION_URL,
    GET_CURRENCY_URL:GET_CURRENCY_URL
}
module.exports = ENDPOINTS_URL;