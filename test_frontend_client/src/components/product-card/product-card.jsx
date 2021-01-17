import React from 'react';
import './product-card.scss';
import shipping from '../../assets/ic_shipping@2x.png';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

const ProductCardComponent = ({ product }) => {

    let history = useHistory();
    const detailPage = () => {
        history.push(`/items/${product.id}`);
    }

    return (
        <div className="product" onClick={detailPage}>
            <img src={product.picture} alt="Imagen producto" className="product__image" />
            <div className="product__content">
                <div className="product__content__details">
                    <div className="product__content__details__info">
                        <div className="product__content__details__info__amount">
                            <CurrencyFormat
                                value={product.price.amount}
                                prefix={'$ '}
                                thousandSeparator={true}
                                displayType={'text'}
                                decimalScale={product.price.decimals}
                                fixedDecimalScale={true}
                            ></CurrencyFormat>
                        </div>
                        {product.free_shipping ? (
                            <img className="product__content__details__info__shipping" src={shipping} alt="Shipping logo" />
                        ) : null}
                    </div>
                    <div className="product__content__details__description">{product.title}</div>
                    <div className="product__content__details__condition">{product.description}</div>
                </div>
                <div className="product__content__location">{product.location}</div>
            </div>
        </div>
    );
}

export default ProductCardComponent;