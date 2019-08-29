import React from 'react';
import './Table.css';

/**
* Componente presentacional de tipo funcional para desplegar una Tabla
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @param {JSX.Element} props.children - contenido JXS de una Tabla
 * @returns {JSX.Element}
 */
const Table = (props) => (
    <table className="table">
        {props.children}
    </table>
);

export default Table;