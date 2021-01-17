import React, {useState} from 'react';
import './header.scss';
import logo from '../../assets/Logo_ML@2x.png';
import searchLogo from '../../assets/ic_Search@2x.png';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [query, setQuery] = useState('');
    let history = useHistory();

    const submitQuery = e => {
        e.preventDefault();
        if(query.trim()!== ''){
            history.push(`/items?search=${query}`);
            window.location.reload();
        }
    }

    const goTohome = () => {
        history.push(`/`);
        window.location.reload();
    }

    const queryStore = useSelector( state => state.items.query)
    return ( 
        <nav className="header">
            <div className="header__content">
                <img src={logo} alt="Logo" className="header__content__logo" onClick={() => goTohome()}/>
                <form action="" className="header__content__searchBar" onSubmit={submitQuery}>
                    <input 
                        type="text" 
                        placeholder={queryStore==='' ? "Nunca dejes de buscar" : queryStore}
                        value={query} 
                        name="query"
                        className="header__content__searchBar__input"
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button className="header__content__searchBar__button" type="submit">
                        <img src={searchLogo} alt="Search Logo" className="header__content__searchBar__button__img"/>
                    </button>
                </form>
            </div>
        </nav>
     );
}
 
export default Header;