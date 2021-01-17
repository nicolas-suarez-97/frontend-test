import React from 'react';
import './breadcrum.scss';
import { useHistory } from 'react-router-dom';

const BreadcrumComponent = ({steps}) => {
    let history = useHistory();
    const submitQuery = step => {
        history.push(`/items?search=${step}`);
        window.location.reload();
    }
    return ( 
        <ul className="breadcrum">
           {steps.map(step => (
               step !== steps[steps.length-1] 
               ? <li key={step} className="breadcrum__item" onClick={() => submitQuery(step)}>{step} <i className="material-icons">keyboard_arrow_right</i></li>
               : <li key={step} className="breadcrum__last" onClick={() => submitQuery(step)}>{step}</li>
           ))}
        </ul>
     );
}
 
export default BreadcrumComponent;