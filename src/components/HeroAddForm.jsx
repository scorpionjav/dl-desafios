import React, { useContext } from 'react';

import { Button, Form, Row, Col} from 'react-bootstrap';

import Context from '../context/Context';
import useInput from '../hooks/useInput';

/**
* Componente presentacional de tipo funcional para desplegar un Formulario
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @returns {JSX.Element}
 */
const HeroAddForm = function (props) {
    /**
     * Para uso del context
     */
    const { weapons } = useContext(Context);

    /**
    * Declaracion de los Hooks
    */
    const name = useInput('');
    const race = useInput('');
    const age = useInput(0,'number');
    const weapon= useInput(weapons[0]);

    /**
     * Metodo manejador del evento click para el Boton Guardar Heroe
     * @param {event} event
     * @returns {function}
     */
    const handleSubmit = e => {
        e.preventDefault();
        const hero = {
            name: name.value,
            race: race.value,
            age: age.value,
            weapon: weapon.value,
        };
        props.onAddNewHero(hero);
    }

    /**
     * Metodo para validar el boton de guardar, en base al contenido de los inputs
     * @param {string} variables a evaluar
     * @returns {boolean} true or false
     */
    const isDisabled = (n, r, a) => {
        return n.value === '' || r.value === '' || a.value < 0;
    }

    return (
        <Form className="text-left">
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Name</Form.Label>
                <Col sm={9}>
                    <Form.Control {...name} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Race</Form.Label>
                <Col sm={9}>
                    <Form.Control {...race} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Age</Form.Label>
                <Col sm={9}>
                    <Form.Control {...age} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Weapon</Form.Label>
                <Col sm={9}>
                <Form.Control as="select" {...weapon}>
                    {
                        weapons.map((w, iw) => (
                            <option key={iw} value={w}>{w}</option>
                        ))
                    }
                </Form.Control>
                </Col>
            </Form.Group>
            <Row>
                <Col className="d-flex justify-content-between">
                    <Button variant="outline-danger" onClick={() => props.onCancelar()}>Cancelar</Button>
                    <Button variant="outline-success" className="ml-auto" disabled={isDisabled(name, race, age)} onClick={(e) => handleSubmit(e)}>Guardar</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default HeroAddForm;