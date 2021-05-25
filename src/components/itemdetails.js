import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from '../utils/api';
import Breadcrumb from './breadcrumb';
import Header from './header';
import Itemdetailbuy from './itemdetailbuy';

function ItemDetails()
{
    let [item, setItem] = useState(null);
    let [categories,setCategories] = useState(null);
    let {id} = useParams();
    useEffect(()=>{
        API.searchitem(id)
        .then((data)=>
        {
            setItem(data.item)
            setCategories(data.categories)
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

        const description = item.description;
        const descritionparsed = description.split('\n').map((str,index) => <p key={index}>{str}</p>);
    return(
            <div>
                <Breadcrumb categs={categories}></Breadcrumb>
            
            <div className="product_detail_container">
                <div className="product_detail_img_and_description">
                    <div className="product_details_img_container">
                        <img className="product_details_img" src={item.picture} alt="Imagen del producto"></img>
                    </div>
                    <div className="product_description_title">Descripción del producto</div>
                    <div className="product_details_description" aria-label="Descripción del producto">
                        {(descritionparsed) ? descritionparsed : "Sin descripción."}
                    </div>
                </div>
                <Itemdetailbuy item={item}></Itemdetailbuy>
            </div>
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