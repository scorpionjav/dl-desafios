import React, { useContext } from 'react';
import Context from '../../context/Context';
import HeroItem from '../HeroItem';
import './Table.css';
import Thead from './Thead';
import Th from './Th';
import Tbody from './Tbody';
import Tr from './Tr';

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
        <table className={`table ${ring && "used-ring"}`}>
            <Thead>
                <Tr>
                    {headers.map((e, ie) => (<Th key={ie}>{e}</Th>))}
                </Tr>
            </Thead>
            <Tbody>
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
            </Tbody>
        </table>
    </div>)
}

export default Table;