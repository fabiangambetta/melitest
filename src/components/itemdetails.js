import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../utils/api';
import Itemdetailbuy from './itemdetailbuy';

function ItemDetails()
{
    let [item, setItem] = useState(null);
    let {id} = useParams();
    useEffect(()=>{
        API.searchitem(id)
        .then((data)=>
        {
            setItem(data.item)
        })
        .catch(
            function(error)
            {
                setItem(null);
            }
        )
    },[id])


    if(item){
        const condicion = item.condition == 'used' ? 'Usado': 'Nuevo';
        const vendidos = `${item.sold_quantity} vendidos`;
    return(
            
            <div className="product_detail_container">
                <div className="product_detail_img_and_description">
                    <div className="product_details_img_container">
                        <img className="product_details_img" src={item.picture} alt="Imagen del producto"></img>
                    </div>
                    <div className="product_description_title">Descripción del producto</div>
                    <div className="product_details_description" aria-label="Descripción del producto">
                        {(item.description) ? item.description : "Sin descripción."}
                    </div>
                </div>
                <Itemdetailbuy item={item}></Itemdetailbuy>
            </div>
        );
    }
    else
    {
        return(
            <div></div>
        )
    }
}

export default ItemDetails;