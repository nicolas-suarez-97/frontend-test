import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from './error';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

it('Should render error component', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <ErrorComponent></ErrorComponent>
        </Provider>
    );
    expect(getByTestId('logo').getAttribute('src')).toBe('Logo_ML@2x.png');
    expect(getByTestId('label').innerHTML).toBe('Parece que ocurrió un error. Por favor intenta nuevamente.');
});

