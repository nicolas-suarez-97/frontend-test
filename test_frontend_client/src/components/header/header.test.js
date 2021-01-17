import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

it('Should render Header Logo', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <Header></Header>
        </Provider>
    );
    
    expect(getByTestId('logo').getAttribute('src')).toBe('Logo_ML@2x.png');
    expect(getByTestId('logo').getAttribute('class')).toBe('header__content__logo');
});

it('Should render Header Input', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <Header></Header>
        </Provider>
    );
    
    expect(getByTestId('search-input').getAttribute('placeholder')).toBe('Nunca dejes de buscar');
    expect(getByTestId('search-input').getAttribute('class')).toBe('header__content__searchBar__input');
});

it('Should render Header Button', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <Header></Header>
        </Provider>
    );
    
    expect(getByTestId('button').getAttribute('class')).toBe('header__content__searchBar__button');
});