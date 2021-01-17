import React, {useEffect} from 'react';
import './product-detail.scss';
import BreadcrumComponent from '../../components/breadcrum/breadcrum';
import CurrencyFormat from 'react-currency-format';
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getItemByIdAction} from '../../store/actions/itemsActions';

const ProductDetail = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getItemById = (id) => dispatch( getItemByIdAction(id) );
        getItemById(id);
    }, [])
    
    
    const loading = useSelector( state => state.items.loading);
    const product = useSelector( state => state.items.item);
    const categories = useSelector( state => state.items.categories);
    return ( 
        <div className="container">
            <div className="container__content">
                <BreadcrumComponent steps={categories}></BreadcrumComponent>
                {loading !== true ? 
                
                    <div className="container__content__product">
                        <div className="container__content__product__firstCol">
                            <img 
                                className="container__content__product__firstCol__image" 
                                src={product.picture} 
                                alt="Imagen producto"
                            />
                            <div className="container__content__product__firstCol__label">Descripción del producto</div>
                            <div className="container__content__product__firstCol__description">
                                {product.description}
                            </div>
                        </div>
                        <div className="container__content__product__secondCol">
                            <div className="container__content__product__secondCol__sold">
                                {product.condition} - {product.sold_quantity} vendidos
                            </div>
                            <div className="container__content__product__secondCol__title">
                                {product.title}
                            </div>
                            <div className="container__content__product__secondCol__amount">
                                {product.price===undefined? null :
                                    <CurrencyFormat
                                        value={product.price.amount}
                                        prefix={'$ '}
                                        thousandSeparator={true}
                                        displayType={'text'}
                                        decimalScale={product.price.decimals}
                                        fixedDecimalScale={true}
                                    ></CurrencyFormat>
                                }
                            </div>
                            <button className="container__content__product__secondCol__button">Comprar</button>
                        </div>
                    </div>
                : null}
            </div>
        </div>
     );
}

export default ProductDetail;