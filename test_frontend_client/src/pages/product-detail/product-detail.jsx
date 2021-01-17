import React, {useEffect} from 'react';
import './product-detail.scss';
import BreadcrumComponent from '../../components/breadcrum/breadcrum';
import CurrencyFormat from 'react-currency-format';
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getItemByIdAction} from '../../store/actions/itemsActions';
import MetaTags from 'react-meta-tags';
import ErrorComponent from '../../components/error/error';

const ProductDetail = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getItemById = (id) => dispatch( getItemByIdAction(id) );
        getItemById(id);
    }, [id, dispatch])
    
    const condition = {
        'used': 'Usado',
        'new':'Nuevo'
    };
    
    const loading = useSelector( state => state.items.loading);
    const categories = useSelector( state => state.items.categories);
    const product = useSelector( state => state.items.item);
    const error = useSelector( state => state.items.error);
    return ( 
        <section className="container">
            {!loading && !error ?
                <MetaTags>
                    <title>{product.title}</title>
                    <meta name="description" content={product.description}/>
                </MetaTags>
            : null}
            <div className="container__content">
                <BreadcrumComponent steps={categories}></BreadcrumComponent>
                {!loading && !error? 
                
                    <div className="container__content__product">
                        <div className="container__content__product__firstCol">
                            <img 
                                className="container__content__product__firstCol__image" 
                                src={product.picture} 
                                alt="Imagen producto"
                            />
                            <h1 className="container__content__product__firstCol__label">Descripción del producto</h1>
                            <p className="container__content__product__firstCol__description">
                                {product.description}
                            </p>
                        </div>
                        <div className="container__content__product__secondCol">
                            <h4 className="container__content__product__secondCol__sold">
                                {condition[product.condition]} - {product.sold_quantity} vendidos
                            </h4>
                            <h2 className="container__content__product__secondCol__title">
                                {product.title}
                            </h2>
                            <h1 className="container__content__product__secondCol__amount">
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
                            </h1>
                            <button className="container__content__product__secondCol__button">Comprar</button>
                        </div>
                    </div>
                : null}
                {error ? <ErrorComponent/>:null}
            </div>
        </section>
     );
}

export default ProductDetail;