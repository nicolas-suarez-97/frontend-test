import {React, Fragment, useEffect} from 'react';
import './search-result.scss';
import BreadcrumComponent from '../../components/breadcrum/breadcrum';
import ProductCardComponent from '../../components/product-card/product-card';
import DividerComponent from '../../components/divider/divider';
import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getItemsAction} from '../../store/actions/itemsActions';
import MetaTags from 'react-meta-tags';
import PlaceholderComponent from '../../components/placeholder/placeholder';
import ErrorComponent from '../../components/error/error';


const SearchResult = () => {

    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(useLocation().search);    
    const query = queryParams.get('search').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    useEffect(() => {
        const getItems = (query) => dispatch( getItemsAction(query) );
        getItems(query);
        
    }, [query, dispatch])

    const loading = useSelector( state => state.items.loading);
    const categories = useSelector( state => state.items.categories);
    const productList = useSelector( state => state.items.items);
    const error = useSelector( state => state.items.error);

    return ( 
        <main className="container">
            <MetaTags>
                <title>{query}</title>
                <meta name="description" content={`Búsqueda de ${query}`}/>
            </MetaTags>
            <div className="container__content">
                <BreadcrumComponent steps={categories}></BreadcrumComponent>
                {loading
                ?
                    <PlaceholderComponent></PlaceholderComponent>
                :
                    <section className="container__content__products">
                        {productList.map(p => (
                            p !== productList[productList.length-1] 
                            ? <Fragment key={p.id}>
                                <ProductCardComponent product={p}></ProductCardComponent>
                                <DividerComponent></DividerComponent>
                            </Fragment>
                            :  <Fragment key={p.id}><ProductCardComponent product={p}></ProductCardComponent></Fragment>
                        ))}
                    </section>
                }
                {error? <ErrorComponent/>:null}
            </div>
        </main>
     );
}

export default SearchResult;