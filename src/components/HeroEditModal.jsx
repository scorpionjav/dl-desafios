import React from 'react';

import { Button, Form, Row, Col, Modal} from 'react-bootstrap';

import useInput from '../hooks/useInput';

/**
* Componente presentacional de tipo funcional para desplegar un Formulario
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 * @param {Object} props - contenedor de propiedades del componente
 * @returns {JSX.Element}
 */
const HeroAddForm = ({ hero, weapons, show, onCancelar, onEditHero}) => {
    /**
    * Declaracion de los Hooks y constantes
    */
    const id = hero.id;
    const name = useInput(hero.name);
    const race = useInput(hero.race);
    const age = useInput(hero.age,'number');
    const weapon = useInput(weapons[weapons.findIndex((w)=> w === hero.weapon)]);
    const power = useInput(hero.power,'number');

    /**
     * Metodo manejador del evento click para el Boton Guardar Heroe
     * @param {event} e
     */
    const handleSubmit = e => {
        e.preventDefault();
        if (name.value !== '' && race.value !== '' && age.value > 0 && power.value >= 0 && power.value <= 5000) {
            const hero = {
                id: id,
                name: name.value,
                race: race.value,
                age: age.value,
                weapon: weapon.value,
                power: power.value,
            };
            onEditHero(hero);
            onCancelar();
        }
    }

    return (
        <Modal show={show} onHide={onCancelar}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Heroe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="text-left" onSubmit={handleSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Nombre</Form.Label>
                        <Col sm={9}>
                            <Form.Control isInvalid={name.value === ''} {...name} />
                            <Form.Control.Feedback type="invalid">Debe ingresar un texto</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Raza</Form.Label>
                        <Col sm={9}>
                            <Form.Control isInvalid={race.value === ''} {...race} />
                            <Form.Control.Feedback type="invalid">Debe ingresar un texto</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Edad</Form.Label>
                        <Col sm={9}>
                            <Form.Control isInvalid={age.value <= 0} {...age} />
                            <Form.Control.Feedback type="invalid">No puede ser 0, ni negativa</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Arma</Form.Label>
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
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Poder</Form.Label>
                        <Col sm={9}>
                            <Form.Control isInvalid={power.value < 0 || power.value > 5000} {...power} />
                            <Form.Control.Feedback type="invalid">No puede ser negativo, ni mayor a 5000</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <Button variant="outline-danger" onClick={() => onCancelar()}>Cancelar</Button>
                            <Button variant="outline-success" className="ml-auto" type="submit">Guardar</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default HeroAddForm;