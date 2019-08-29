import React from 'react';
import './Title.css';

/**
* Componente presentacional de tipo funcional para desplegar un H2
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @param {JSX.Element} props.children - contenido JXS de un H2
 * @returns {JSX.Element}
 */
const Title = (props) => (
    <h2 className="title">
        {props.children}
    </h2>
);

export default Title;