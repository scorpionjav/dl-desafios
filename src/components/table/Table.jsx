import React, { useContext } from 'react';
import './Table.css';

import Context from '../../context/Context';

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
const Table = (props) => {
    const { headers, list, options, ring, } = useContext(Context);
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
                    list.map((l, il) => (
                        <HeroItem
                            key={il}
                            hero={l}
                            indexHero={il}
                            optionsHero={options}
                            onKillHero={props.onKillHero}
                            onUseRingHero={props.onUseRingHero}
                        />
                    ))
                }
            </tbody>
        </TB>
    </div>)
}

export default Table;