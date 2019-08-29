import React from 'react';
import './Container.css';

/**
* Componente presentacional de tipo funcional para desplegar un un Div Container
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @param {JSX.Element} props.children - contenido JXS de un Div Container
 * @returns {JSX.Element}
 */
const Container = (props) => (
    <div className="container">
        {props.children}
    </div>
);

export default Container;