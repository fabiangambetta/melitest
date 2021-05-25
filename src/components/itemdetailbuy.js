import react from 'react';
import COMMON from '../utils/common.js'

const Itemdetailbuy = (props) =>
{
    const condicion = props.item.condition == 'used' ? 'Usado': 'Nuevo';
    const vendidos = `${props.item.sold_quantity} vendidos`;
    return(
        <div className="product_detail_price_container">
                    <div className="product_detail_sales" aria-label="Condición y unidades vendidas previamente">{condicion} - {vendidos}</div>
                    <div className="product_detail_title" aria-label="Título del producto">{props.item.title}</div>
                    <div className="product_detail_price" aria-label="Precio del producto">{props.item.price.currency} {COMMON.formatNumber(props.item.price.amount)}</div>
                    <div className="product_detail_buy">
                        <button className="product_detail_buy_button" aria-label="Comprar una unidad del producto"> Comprar</button>
                    </div>
        </div>
    )
}

export default Itemdetailbuy;