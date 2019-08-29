import React from 'react';
import './Table.css';

/**
* Componente presentacional de tipo funcional para desplegar un Thead
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @param {JSX.Element} props.children - contenido JXS de un Thead
 * @returns {JSX.Element}
 */
const Thead = (props) => (
    <thead>
        {props.children}
    </thead>
)

export default Thead;