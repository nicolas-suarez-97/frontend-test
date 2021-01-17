import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from './search-result';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';



it('Should render product details', () => {
    let history = createMemoryHistory();
    history.push(`/items/?search=ipod`);

    const { getByTestId } = render(
        <Router history={history}>
            <Provider store={store}>
                <SearchResult></SearchResult>
            </Provider>
        </Router>
    );
    expect(getByTestId('main-section').innerHTML).toBe('<div class="container__content"><ul class="breadcrum" data-testid="breadcrum"></ul><div class=\"placeholder\" data-testid=\"placeholder\"></div></div>');
});

