import React, { useState } from 'react';
import './Table.css';

import { Table as TB } from 'react-bootstrap';

import HeroItem from '../HeroItem';

/**
* Componente presentacional de tipo funcional para desplegar una Tabla
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @returns {JSX.Element}
 */
const Table = ({ headers, heroes, options, onKillHero, onUseRingHero, onEditHero, weapons, onDeleteHero  }) => {

    /**
    * Declaracion de los Hooks
    */
    const [ring, setRing] = useState(false);

    /**
     * Metodo manejador del evento click para el Boton Usar Anillo
     * @returns {function}
     */
    const handleUseRingHero = (id) => {
        setRing(!ring);
        onUseRingHero(id);
    }

    return (<div>
        <TB className={`table ${ring && "used-ring"}`} striped bordered hover responsive variant="dark" size="sm">
            <thead>
                <tr>
                    {
                        headers.map((e, ie) => (
                            <th key={ie} className="text-center">{e}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    console.log(heroes),
                    heroes.map((h, ih) => (
                        <HeroItem
                            key={h.id}
                            hero={h}
                            ring={ring}
                            optionsHero={options}
                            onKillHero={onKillHero}
                            onUseRingHero={handleUseRingHero}
                            onEditHero={onEditHero}
                            weapons={weapons}
                            onDeleteHero={onDeleteHero}
                        />
                    ))
                }
            </tbody>
        </TB>
    </div>)
}

export default Table;