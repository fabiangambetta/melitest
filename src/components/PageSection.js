import Breadcrumb from "./breadcrumb";
import Header from "./header";
import Searchitemresult from "./searchitemresult";
import API from "../utils/api.js";
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import React, { useEffect, useState } from 'react';

function PageSection(props) {
    let [items, setItems] = useState([]);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const Query = useQuery().get('search');
 
    useEffect(()=>{
        API.searchItems(Query)
        .then(
            (data) => {
                setItems(items = data.items);
            }
        )
        .catch(
            function (data) { console.log("falla") }
        )
    },[Query, setItems])

    const listitemresults = items.map((item) =>
        <Searchitemresult key={item.id} item={item} ></Searchitemresult>
    );

    return (
        <div className="search_result_container">
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            {listitemresults}
        </div>
    );
};

export default PageSection;