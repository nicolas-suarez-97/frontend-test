import React from 'react';
import './error.scss';
import Logo from '../../assets/Logo_ML@2x.png';

const ErrorComponent = () => {
    return ( 
        <div className="card">
            <img src={Logo} alt="ML Logo"/>
            <h1 className="card__label">Para que ocurrió un error. Por favor intenta nuevamente.</h1>
        </div>
     );
}

export default ErrorComponent;