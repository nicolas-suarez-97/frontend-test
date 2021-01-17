import React from 'react';
import { render } from '@testing-library/react';
import ProductCardComponent from './product-card';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

const product = {
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
    "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares i12 TWS y ¡escapate de la rutina por un rato!"
}


it('Should render Product Card', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <ProductCardComponent product={product}></ProductCardComponent>
        </Provider>
    );

    expect(getByTestId('amount').innerHTML).toBe('$ 1,121');
    expect(getByTestId('title').getAttribute('class')).toBe('product__content__details__description');
    expect(getByTestId('title').innerHTML).toBe('Auriculares Inalámbricos I12 Tws Blanco');
    expect(getByTestId('description').innerHTML).toBe('En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares i12 TWS y ¡escapate de la rutina por un rato!');
});