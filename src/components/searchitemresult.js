import React from 'react';

const Searchitemresult = (props) =>
{

    //const src_aux = "http://http2.mlstatic.com/D_NQ_NP_CODIGO-O.webp";
    //const src = src_aux.replace('CODIGO',props.item.thumbnail_id);
    return(
        <div className="search_result_item_container">
            <div className="search_result_description_container">
                <div className="search_result_img_container">
                    <img className="search_result_img" src={props.item.picture} alt=""></img>
                </div>
                <div className="search_result_detail_container">
                    <div className="search_result_price">{props.item.price.currency}{props.item.price.amount}</div>
                    <div className="search_result_icon"></div>
                    <div className="search_result_description">
                        {props.item.title}
                    </div>
                </div>
            </div>
            <div className="search_result_location_container">
                <div className="search_result_location">Capital Federal</div>
            </div>
            <hr className="search_item_separator"></hr>
        </div>
    );
}

export default Searchitemresult;

