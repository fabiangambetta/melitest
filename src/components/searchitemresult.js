import React from 'react';
import { withRouter } from 'react-router';
import shipping_icon from '../assets/ic_shipping.png';
import PropTypes from 'prop-types';

const Searchitemresult = (props) =>
{
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    function showProduct(id)
    {
        props.history.push('/items/'+id);
    }
    return(
        <>
        <div className="search_result_item_container" onClick={() => { showProduct(props.item.id) }}>
            <div className="search_result_description_container">
                <div className="search_result_img_container">
                    <img className="search_result_img" src={props.item.picture} alt="Imagen del producto" ></img>
                </div>
                <div className="search_result_detail_container">
                    <div className="search_result_price">{props.item.price.currency} {formatNumber(props.item.price.amount)}</div>
                    <div className="search_result_icon">
                        {props.item.free_shipping && <img src={shipping_icon} alt="Entrega gratis"></img>}
                    </div>
                    <div className="search_result_description">
                        {props.item.title}
                    </div>
                </div>
            </div>
            <div className="search_result_location_container">
                <div className="search_result_location" >{props.item.address}</div>
            </div>  
        </div>
        {!props.last && <hr className="search_item_separator" ></hr>}
        </>
        
    );
}


Searchitemresult.propTypes = {
    history:PropTypes.shape({
        push: PropTypes.func.isRequired
    }),
    item: PropTypes.shape({
        id:PropTypes.number,
        picture: PropTypes.string,
        price:PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.string
        }),
        free_shipping:PropTypes.bool,
        title:PropTypes.string,
        address: PropTypes.string
    }).isRequired
  };
export default withRouter(Searchitemresult);

