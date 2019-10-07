import React, { useState } from 'react';
import { connect} from 'react-redux';

import {
    getAllHeroes,
    addHero,
    deleteHero,
    editHero,
    killHero,
    useRingHero,
    searchHero,
} from '../../store/actions/hero.actions';

import './Home.css';
import { Button, Container, Row, Col, Form, } from 'react-bootstrap';

import Title from './../../components/title/Title';
import Table from './../../components/table/Table';
import HeroAddForm from './../../components/HeroAddForm';

import useInput from '../../hooks/useInput';

/**
 * Componente presentacional de tipo funcional
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 */
const Home = (props) => {
    /**
    * Declaracion de los Hooks y constantes
    */
    const [viewAddForm, setViewAddForm] = useState(false)
    const textSearch = useInput('');
    const propertySearch = useInput('name');

    const {
        heroes,
        addHero,
        deleteHero,
        editHero,
        killHero,
        useRingHero,
        searchHero,
        headers = ['#','Nombre', 'Raza', 'Edad', 'Arma', 'Poder', 'Controles', 'Opciones'],
        options = ['☠ Matar', '💍 Usar Anillo'],
        ring = false,
        weapons = ['Staff 🏑', 'Sword ⚔', 'Bow 🏹', 'Axe ⚒', 'Dagger 🗡'],
    } = props;

    /**
     * Metodo manejador del evento click para el Boton Agregar Heroe
     * @returns {function}
     */
    const handleViewAddForm = () => {
        setViewAddForm(!viewAddForm);
    }

    return (
            <div className="home">
                <Container>
                    <Row>
                        <Col className="text-center my-3">
                            <Title>Comunidad del Anillo</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="8" className="text-center my-3 mx-auto">
                            <Form.Group as={Row}>
                                <Form.Label column sm={2} className="text-right font-weight-bold">Filtrar por:</Form.Label>
                                <Col sm={3}>
                                    <Form.Control as="select" className="font-weight-bold" {...propertySearch}>
                                        <option value='name'>Nombre</option>
                                        <option value='race'>Raza</option>
                                        <option value='age'>Edad</option>
                                        <option value='power'>Poder</option>
                                        <option value='weapon'>Arma</option>
                                    </Form.Control>
                                </Col>
                                <Col sm={4}>
                                    <Form.Control {...textSearch}/>
                                </Col>
                                <Col sm={2}>
                                    <Button variant="primary" 
                                        onClick={() => searchHero(propertySearch.value, textSearch.value)}
                                    >Buscar</Button>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6" className="text-center mx-auto my-3">
                            {
                                !viewAddForm ?
                                <Button onClick={handleViewAddForm} variant="success">Agregar Nuevo</Button> :
                                <HeroAddForm
                                    weapons={weapons}
                                    onCancelar={handleViewAddForm}
                                    onAddNewHero={addHero}
                                />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="9" className="mx-auto">
                            <Table
                                headers={headers}
                                heroes={heroes}
                                options={options}
                                ring={ring}
                                onKillHero={killHero}
                                onUseRingHero={useRingHero}
                                onDeleteHero={deleteHero}
                                onEditHero={editHero}
                                weapons={weapons}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

const mapStateToProps = state => state.heroes;

const mapDispatchToProps = (dispatch) => {
    dispatch(getAllHeroes())
    return {
        addHero: hero => dispatch(addHero(hero)),
        deleteHero: hero => dispatch(deleteHero(hero)),
        editHero: hero => dispatch(editHero(hero)),
        killHero: hero => dispatch(killHero(hero)),
        useRingHero: hero => dispatch(useRingHero(hero)),
        searchHero: (property, text) => dispatch(searchHero(property, text))

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);