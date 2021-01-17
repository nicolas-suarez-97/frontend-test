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

      
    const condition = {
        'used': 'Usado',
        'new':'Nuevo'
    };

    return (
        <div className="product" onClick={detailPage}>
            <img src={product.picture} alt="Imagen producto" className="product__image" />
            <div className="product__content">
                <div className="product__content__details">
                    <div className="product__content__details__info">
                        <h2 className="product__content__details__info__amount" >
                            <CurrencyFormat
                                value={product.price.amount}
                                prefix={'$ '}
                                thousandSeparator={true}
                                displayType={'text'}
                                decimalScale={product.price.decimals}
                                fixedDecimalScale={true}
                                data-testid="amount"
                            ></CurrencyFormat>
                        </h2>
                        {product.free_shipping ? (
                            <img className="product__content__details__info__shipping" src={shipping} alt="Shipping logo" />
                        ) : null}
                    </div>
                    <p className="product__content__details__description" data-testid="title">{product.title}</p>
                    <p className="product__content__details__condition" data-testid="description">{condition[product.condition]}</p>
                </div>
                <p className="product__content__location">{product.location}</p>
            </div>
        </div>
    );
}

export default ProductCardComponent;