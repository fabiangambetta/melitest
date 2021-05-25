import COMMON from '../utils/common.js'
import PropTypes from 'prop-types';
import '../assets/styles/components/Itemdetailbuy.css';

const Itemdetailbuy = (props) =>
{
    const condicion = props.item.condition == 'used' ? 'Usado': 'Nuevo';
    const vendidos = `${props.item.sold_quantity} vendidos`;
    const precioconformato = COMMON.formatNumber(props.item.price.amount);
    const decimals = "0".repeat(props.item.price.decimals);
    return(
        <div className="product_detail_price_container">
                    <div className="product_detail_sales" aria-label="Condición y unidades vendidas previamente">{condicion} - {vendidos}</div>
                    <div className="product_detail_title" aria-label="Título del producto">{props.item.title}</div>
                    <div className="product_detail_price" aria-label="Precio del producto">{props.item.price.currency} {precioconformato}</div>
                    <div className="product_detail_buy">
                        <button type="button" className="product_detail_buy_button" aria-label="Comprar una unidad del producto"> Comprar</button>
                    </div>
        </div>
    )
}


Itemdetailbuy.propTypes = {
    item: PropTypes.shape(
        {
            condition: PropTypes.string,
            sold_quantity: PropTypes.number,
            title: PropTypes.string,
            price:PropTypes.shape({
                amount:PropTypes.number,
                currency:PropTypes.string,
                decimals:PropTypes.number
            })

        }
    ).isRequired
}

export default Itemdetailbuy;