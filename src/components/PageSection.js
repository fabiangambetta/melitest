import Breadcrumb from "./breadcrumb";
import Header from "./header";
import Searchitemresult from "./searchitemresult";
import API from "../utils/api.js";
import {
    useLocation
} from "react-router-dom";
import React, { useEffect, useState } from 'react';

function PageSection(props) {
    let [items, setItems] = useState(null);
    let [categories,setCategories] = useState(null);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const Query = useQuery().get('search');
    console.log(Query);

    useEffect(() => {
        API.searchItems(Query)
            .then(
                (data) => {
                    console.log("DATA");
                    console.log(data)
                    setItems(data.items);
                    setCategories(data.categories);
                }
            )
            .catch(
                function (data) { console.log("falla") }
            )
    }, [Query])

    if (items) {
        console.log(items)
        console.log(categories)
        const listitemresults = items.map((item,index) =>
           <Searchitemresult key={item.id} item={item} last={index == items.length-1} ></Searchitemresult>
        );
        return (
            <div>
                <Header ></Header>
                <Breadcrumb categs={categories}></Breadcrumb>
                <div className="search_result_container">
                    {listitemresults}
                </div>
            </div>

        );
    }
    else {
        return (

            <div className="search_result_container">
                <Header></Header>
                <Breadcrumb></Breadcrumb>
                <div></div>
            </div>)
    }
};

export default PageSection;