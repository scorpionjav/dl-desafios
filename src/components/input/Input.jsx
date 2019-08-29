import React from 'react';
import './Input.css';


/**
 * Componente presentacional de tipo funcional para desplegar un Input
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {object} props - contenedor de propiedades del componente
 * @param {string} props.placeholder - texto interno del input
 * @returns {JSX.Element}
 */
const Input = ({ placeholder }) => (
    <div className="input">
        <input type="text" placeholder={placeholder}/>
    </div>
)

export default Input;