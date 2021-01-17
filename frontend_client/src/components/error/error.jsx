import React from 'react';
import './error.scss';
import Logo from '../../assets/Logo_ML@2x.png';

const ErrorComponent = () => {
    return ( 
        <div className="card">
            <img src={Logo} alt="ML Logo" data-testid="logo"/>
            <h1 className="card__label" data-testid="label">Parece que ocurrió un error. Por favor intenta nuevamente.</h1>
        </div>
     );
}

export default ErrorComponent;