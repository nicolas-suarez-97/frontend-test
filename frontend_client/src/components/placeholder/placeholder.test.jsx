import React from 'react';
import { render } from '@testing-library/react';
import PlaceholderComponent from './placeholder';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

it('Should render placeholder', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <PlaceholderComponent></PlaceholderComponent>
        </Provider>
    );
    
    expect(getByTestId('placeholder').getAttribute('class')).toBe('placeholder');
    expect(getByTestId('placeholder').innerHTML).toBe('');
});

