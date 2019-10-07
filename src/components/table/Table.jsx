import React from 'react';
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
const Table = ({ headers, heroes, options, ring, onKillHero, onUseRingHero, onEditHero, weapons, onDeleteHero  }) => {

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
                    heroes.map((h, ih) => (
                        <HeroItem
                            key={h.id}
                            hero={h}
                            optionsHero={options}
                            onKillHero={onKillHero}
                            onUseRingHero={onUseRingHero}
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