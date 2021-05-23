import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../utils/api';

function ItemDetails()
{
    let [item, setItem] = useState({});
    let {id} = useParams();
    console.log("ID:"+id);

    useEffect(()=>{
        console.log("use1");
        API.searchitem(id)
        .then((data)=>
        {
            console.log("ACA")
            setItem(item = data.item)
        })
        .catch(
            function(error)
            {
                console.log("ererer");
            }
        )
    },[id,setItem])

    return(
            <div className="product_detail_container">
                <div className="product_detail_img_and_description">
                    <div className="product_details_img_container">
                        <img className="product_details_img" src="https://http2.mlstatic.com/D_NQ_NP_611737-MLU45536911837_042021-O.webp"></img>
                    </div>
                    <div className="product_details_description">
                        {item.description}
                    </div>
                </div>
                <div className="product_detail_price">
                    <div className="product_detail_sales">{item.condition} - {item.sold_quantity}</div>
                    <div className="product_detail_title">{item.title}</div>
                    <div className="product_detail_price">{item.price.currency} {item.price.amount}</div>
                    <div className="product_detail_buy">
                        <button className="product_detail_buy_button"> Comprar</button>
                    </div>
                </div>
            </div>
        );
}

export default ItemDetails;