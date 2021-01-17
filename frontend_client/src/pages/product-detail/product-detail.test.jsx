import React from 'react';
import { render } from '@testing-library/react';
import ProductDetail from './product-detail';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';

const item = {
    "author": {
        "name": "Nicolás",
        "lastname": "Suárez"
    },
    "item": {
        "id": "MLA901507324",
        "title": "Auriculares Inalámbricos I12 Tws Blanco",
        "price": {
            "currency": "ARS",
            "amount": 1121,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_894268-MLA43054861870_082020-O.jpg",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 500,
        "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares i12 TWS ."
    }
}

it('Should render product details', () => {
    let history = createMemoryHistory();
    history.push(`/items/MLA901507324`);

    const { getByTestId } = render(
        <Router history={history}>
            <Provider store={store}>
                <ProductDetail></ProductDetail>
            </Provider>
        </Router>
    );
    expect(getByTestId('main-section').innerHTML).toBe('<div class="container__content"><ul class="breadcrum" data-testid="breadcrum"></ul></div>');
});

