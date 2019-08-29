import React from 'react';
import './Table.css';

/**
* Componente presentacional de tipo funcional para desplegar un Tr
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @param {JSX.Element} props.children - contenido JXS de un Tr
 * @param {JSX.Element} props.className - clases css JXS de un Tr
 * @returns {JSX.Element}
 */
const Tr = (props) => (
    <tr className={`character-row ${props.className}`}>
        {props.children}
    </tr>
)

export default Tr;