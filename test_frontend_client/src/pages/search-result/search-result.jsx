import {React, Fragment, useEffect} from 'react';
import './search-result.scss';
import BreadcrumComponent from '../../components/breadcrum/breadcrum';
import ProductCardComponent from '../../components/product-card/product-card';
import DividerComponent from '../../components/divider/divider';
import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getItemsAction} from '../../store/actions/itemsActions';

const SearchResult = () => {

    let query = new URLSearchParams(useLocation().search);    
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getItems = (query) => dispatch( getItemsAction(query) );
        getItems(query.get('search'));
    }, [])

    const productList = useSelector( state => state.items.items);
    const categories = useSelector( state => state.items.categories);

    return ( 
        <div className="container">
            <div className="container__content">
                <BreadcrumComponent steps={categories}></BreadcrumComponent>
                <div className="container__content__products">
                    {productList.map(p => (
                        p !== productList[productList.length-1] 
                        ? <Fragment key={p.id}>
                            <ProductCardComponent product={p}></ProductCardComponent>
                            <DividerComponent></DividerComponent>
                        </Fragment>
                        :  <Fragment key={p.id}><ProductCardComponent product={p}></ProductCardComponent></Fragment>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default SearchResult;