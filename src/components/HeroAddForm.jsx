import React, { useState, useContext } from 'react';

import { Button, Form, Row, Col} from 'react-bootstrap';

import Context from '../context/Context';

const isDisabled = (n, r, a, w) => {
    return n === '' || r === '' || a < 0 || w === '';
}

const HeroAddForm = function (props) {
    const { weapons } = useContext(Context);

    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState(0);
    const [weapon, setWeapon] = useState(weapons[0]);

    const handleSubmit = e => {
        e.preventDefault();
        const hero = {
            name,
            race,
            age,
            weapon,
        };
        setName('');
        setRace('');
        setAge(0);
        setWeapon('');
        props.onAddNewHero(hero);
    }

    return (
        <Form className="text-left">
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Name</Form.Label>
                <Col sm={9}>
                    <Form.Control name="name" type="text" value={name} onChange={(event) => { setName(event.target.value); }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Race</Form.Label>
                <Col sm={9}>
                    <Form.Control name="race" type="text" value={race} onChange={(event) => { setRace(event.target.value); }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Age</Form.Label>
                <Col sm={9}>
                    <Form.Control name="age" type="number" min="0" value={age} onChange={(event) => { setAge(event.target.value); }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Weapon</Form.Label>
                <Col sm={9}>
                <Form.Control as="select" name="weapon" onChange={(event) => { setWeapon(event.target.value); }}>
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
                    <Button variant="outline-success" className="ml-auto" disabled={isDisabled(name, race, age, weapon)} onClick={(e) => handleSubmit(e)}>Guardar</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default HeroAddForm;