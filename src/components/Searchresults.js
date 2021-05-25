import Breadcrumb from "./Breadcrumb";
import Searchitemresult from "./Searchitemresult";
import API from "../utils/api.js";
import '../assets/styles/components/Searchresults.css';
import {
    useLocation
} from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Searchresults() {
    let [items, setItems] = useState(null);
    let [categories,setCategories] = useState(null);
    let [error,setError] = useState(false);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const Query = useQuery().get('search');
    useEffect(() => {
        API.searchItems(Query)
            .then(
                (data) => {
                    setItems(data.items);
                    setCategories(data.categories);
                    setError(false);
                }
            )
            .catch(
                function () {
                    setError(true);
                }
            )
    }, [Query])

    if (items) {
        const listitemresults = items.map((item,index) =>
           <Searchitemresult key={index} item={item} last={index == items.length-1} ></Searchitemresult>
        );
        return (
            <div>
                <Breadcrumb categs={categories}></Breadcrumb>
                <div className="search_result_container">
                    {listitemresults}
                </div>
            </div>

        );
    }
    else if(error){
        return (
            <div className="search_result_container">
                <div>No se ha recuperado ningún resultado para la búsqueda realizada</div>
            </div>)
    }
    else{
        return (
            <div className="search_result_container">
                <Breadcrumb></Breadcrumb>
                <div></div>
            </div>)
    }
};

export default Searchresults;