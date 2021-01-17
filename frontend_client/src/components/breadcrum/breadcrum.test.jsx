import React from 'react';
import { render } from '@testing-library/react';
import BreadcrumComponent from './breadcrum';
import { Provider } from 'react-redux';
import store from '../../store/store';
import '@testing-library/jest-dom/extend-expect';

const steps = [
    "Electrónica, Audio y Video",
    "Audio"
];
it('Should render breadcrum', () => {
    const {getByTestId} = render(   
        <Provider store={store}>
            <BreadcrumComponent steps={steps}></BreadcrumComponent>
        </Provider>
    );
    
    expect(getByTestId('breadcrum').getAttribute('class')).toBe('breadcrum');
    expect(getByTestId('last-item').innerHTML).toBe('Audio');
});
