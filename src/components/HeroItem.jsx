import React from 'react';
import { Button } from 'react-bootstrap';

/**
* Componente presentacional de tipo funcional para desplegar un Heroe
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @returns {JSX.Element}
 */
const HeroItem = (props) => (
    <tr className={`${props.hero.dead && "dead" } ${props.hero.ring && "used-ring"}`}>
        <td>{props.hero.name}</td>
        <td>{props.hero.race}</td>
        <td>{props.hero.age}</td>
        <td>{props.hero.weapon}</td>
        <td>
            <div className="controls d-flex justify-content-center">
                <Button
                    variant="danger"
                    size="sm"
                    className="btn-kill mr-2"
                    onClick={props.onKillHero(props.indexHero)}
                >
                    {props.optionsHero[0]}
                </Button>
                <Button
                    variant="warning"
                    size="sm"
                    className="btn-usering ml-2"
                    onClick={props.onUseRingHero(props.indexHero)}
                >
                    {props.optionsHero[1]}
                </Button>
            </div>
        </td>
    </tr>
);
export default HeroItem;