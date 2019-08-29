import React from 'react';
import './Table.css';

/**
* Componente presentacional de tipo funcional para desplegar un Th
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @param {JSX.Element} props.children - contenido JXS de un Th
 * @returns {JSX.Element}
 */
const Th = (props) => (
    <th>
        {props.children}
    </th>
)

export default Th;