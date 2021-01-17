import React from 'react';
import { render } from '@testing-library/react';
import DividerComponent from './divider';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

it('Should render divider', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <DividerComponent></DividerComponent>
        </Provider>
    );
    
    expect(getByTestId('divider').getAttribute('class')).toBe('divider');
    expect(getByTestId('divider').innerHTML).toBe('');
});

