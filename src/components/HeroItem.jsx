import React from 'react';
import Tr from './table/Tr';
import Td from './table/Td';

/**
* Componente presentacional de tipo funcional para desplegar un Heroe
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @returns {JSX.Element}
 */
const HeroItem = (props) => (
    <Tr className={`${props.hero.dead && "dead" } ${props.hero.ring && "used-ring"}`}>
        <Td>{props.hero.name}</Td>
        <Td>{props.hero.race}</Td>
        <Td>{props.hero.age}</Td>
        <Td>{props.hero.weapon}</Td>
        <Td>
            <div className="controls">
                <div
                    className="btn-kill"
                    onClick={props.onKillHero(props.indexHero)}
                >
                    {props.optionsHero[0]}
                </div>
                <div
                    className="btn-usering"
                    onClick={props.onUseRingHero(props.indexHero)}
                >
                    {props.optionsHero[1]}
                </div>
            </div>
        </Td>
    </Tr>
);
export default HeroItem;