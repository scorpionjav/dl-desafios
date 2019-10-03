import React, { useState } from 'react';
import './Home.css';

import { getAll } from './../../services/hero.service';

import Context from '../../context/Context';

import { Button, Container, Row, Col, } from 'react-bootstrap';

import Title from './../../components/title/Title';
import Table from './../../components/table/Table';
import HeroAddForm from './../../components/HeroAddForm';

/**
 * Componente presentacional de tipo funcional
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 */
const Home = () => {
    /**
    * Declaracion de los Hooks y constantes
    */
    const headers = ['Name', 'Race', 'Age', 'Weapon', 'Controls'];
    const [list, setList] = useState(getAll);
    const options = ['☠ Kill', '💍 Use Ring'];
    const [ring, setRing] = useState(false);
    const [viewAddForm, setViewAddForm] = useState(false);
    const weapons = ['Staff 🏑', 'Sword ⚔', 'Bow 🏹', 'Axe ⚒', 'Dagger 🗡'];

    /**
     * Metodo manejador del evento click para el DIV Btn Kill
     * @returns {function}
     */
    const handleKill = index => {
        return () => {
            const currentList = list;
            let selected = currentList.splice(index, 1)[0];
            selected.dead = true;
            const newList = currentList.concat(selected);
            setList(newList);
        }
    }

    /**
     * Metodo manejador del evento click para el DIV Btn UseRing
     * @returns {function}
     */
    const handleUseRing = index => {
        return () => {
            const currentList = list;
            let selected = currentList.find((l, i) => i === Number(index));
            selected.ring = true;
            setList(currentList);
            setRing(true);
        }
    }

    /**
     * Metodo manejador del evento click para el Boton Agregar Heroe
     * @returns {function}
     */
    const handleViewAddForm = () => {
        setViewAddForm(!viewAddForm);
    }

    /**
     * Metodo manejador del evento click para el Boton Guardar Heroe
     * @returns {function}
     */
    const handleAddHero = (hero) => {
        const currentList = list;
        currentList.push({...hero});
        setList(currentList);
        setViewAddForm(!viewAddForm);
    }

    const data = {
        headers,
        list,
        options,
        ring,
        weapons
    }

    return (
        <Context.Provider value={data}>
            <div className="home">
                <Container>
                    <Row>
                        <Col className="text-center my-3">
                            <Title>Fellowship of the Ring</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6" className="text-center mx-auto my-3">
                            {
                                !viewAddForm ?
                                <Button onClick={handleViewAddForm} variant="success">Agregar Nuevo</Button> :
                                <HeroAddForm onCancelar={handleViewAddForm} onAddNewHero={handleAddHero}/>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="7" className="mx-auto">
                            <Table onKillHero={handleKill} onUseRingHero={handleUseRing}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Context.Provider>
    );
}

export default Home;
