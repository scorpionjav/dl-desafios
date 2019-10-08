import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import HeroEditModal from './HeroEditModal';

/**
* Componente presentacional de tipo funcional para desplegar un Heroe
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @returns {JSX.Element}
 */
const HeroItem = ({hero, ring, optionsHero, onKillHero, onUseRingHero, onEditHero, weapons, onDeleteHero }) => {
    /**
    * Declaracion de los Hooks
    */
    const [viewEditModal, setEditModal] = useState(false);

    /**
     * Metodo manejador del evento click para el Boton Editar Heroe
     * @returns {function}
     */
    const handleViewEditModal = () => {
        setEditModal(!viewEditModal);
    }

    return (
        <tr className={`${hero.dead && "dead" } ${hero.ring && "used-ring"}`}>
            <td>{hero.id}</td>
            <td>{hero.name}</td>
            <td>{hero.race}</td>
            <td>{hero.age}</td>
            <td>{hero.weapon}</td>
            <td>{hero.power}</td>
            <td>
                <div className="controls d-flex justify-content-center">
                    <Button
                        variant="danger"
                        size="sm"
                        className="btn-kill"
                        onClick={() => onKillHero(hero.id)}
                    >
                        {optionsHero[0]}
                    </Button>
                    <Button
                        variant="warning"
                        size="sm"
                        className="btn-usering ml-3"
                        onClick={() => onUseRingHero(hero.id)}
                    >
                        {optionsHero[1]}
                    </Button>
                </div>
            </td>
            <td>
                <div className="controls d-flex justify-content-center">
                    <Button
                        variant="light"
                        size="sm"
                        className="mr-2"
                        onClick={handleViewEditModal}
                    >
                        Editar
                    </Button>
                    <HeroEditModal
                        hero={hero}
                        weapons={weapons}
                        show={viewEditModal}
                        onEditHero={onEditHero}
                        onCancelar={handleViewEditModal}
                    ></HeroEditModal>
                    <Button
                        variant="info"
                        size="sm"
                        className="ml-2"
                        onClick={() => onDeleteHero(hero.id)}
                    >
                        Eliminar
                    </Button>
                </div>
            </td>
        </tr>
)};
export default HeroItem;