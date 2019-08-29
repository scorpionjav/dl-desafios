import React, { Component } from 'react';
import './Home.css';

import Title from './../../components/title/Title';

import Container from './../../components/container/Container';

import Input from './../../components/input/Input';

import Table from './../../components/table/Table';
import Tbody from './../../components/table/Tbody';
import Td from './../../components/table/Td';
import Th from './../../components/table/Th';
import Thead from './../../components/table/Thead';
import Tr from './../../components/table/Tr';

import { getAll } from './../../services/hero.service';

/**
 * Componente basado en clase, utilizado como vista en una aplicacion
 *
 * @author Jesus Acevedo <jesus06av(a)gmail.com>
 * @version 1.0.0
 */
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            encabezados: ['Name', 'Race', 'Age', 'Weapon', 'Controls'],
            lista: getAll(),
            opciones: ['☠ Kill', '💍 Use Ring'],
            anilloUsado: false 
        };
    }

    /**
     * Metodo manejador del evento click para el DIV Btn Kill
     * @returns {function}
     */
    handlerKill = index => {
        return () => {
            let { lista } = this.state;
            let selected = lista.splice(index, 1)[0];
            selected.dead = true;
            lista = lista.concat(selected);
            this.setState({ lista });
        }
    }

    /**
     * Metodo manejador del evento click para el DIV Btn UseRing
     * @returns {function}
     */
    handlerUseRing = index => {
        return () => {
            let { lista } = this.state;
            let selected = lista.find((l, i) => i === Number(index));
            selected.ring = true;
            this.setState({ lista, anilloUsado: true });
        }
    }

    /**
     * Metodo manejador del evento click para el DIV Controls
     * @returns {undefined}
     */
    handlerOnClick = (event) => { 
        const { dataset, className } = event.target;
        let { lista } = this.state;
        let selected ;
        if (className === 'btn-kill') {
            // todo: Tacha (Le agrega un estilo grisáceo)
            selected = lista.splice(dataset.key, 1)[0];
            selected.dead = true;
            // todo: Manda al final de la tabla al row.
            lista = lista.concat(selected);
        } else if (className === 'btn-usering') {
            // todo: Esconde el row de la tabla
            selected = lista.find((l, i) => i === Number(dataset.key));
            selected.ring = true;
            // todo: Oculta la opción de usar anillo a todos los demás
            this.setState({ anilloUsado: true })
        }
        this.setState({ lista });
    }

    render() {
        const { encabezados, lista, opciones, anilloUsado } = this.state;
        return (
            <div className="home">
                <Title>Fellowship of the Ring</Title>
                <Container>
                    <Input placeholder="search hero" />
                    <Table className={anilloUsado ? 'used-ring': ''}>
                        <Thead>
                            <Tr>
                                {encabezados.map((e, ie) => (<Th key={ie}>{e}</Th>))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                lista.map((l, il) => (
                                    <Tr
                                        key={il}
                                        className={`${l.dead ? "dead" : ""} ${l.ring ? "used-ring" : ""}`}
                                    >
                                        <Td>{l.name}</Td>
                                        <Td>{l.race}</Td>
                                        <Td>{l.age}</Td>
                                        <Td>{l.weapon}</Td>
                                        <Td>
                                            <div className="controls">
                                                <div
                                                    className="btn-kill"
                                                    onClick={this.handlerKill(il)}
                                                >
                                                    {opciones[0]}
                                                </div>
                                                <div
                                                    className="btn-usering"
                                                    onClick={this.handlerUseRing(il)}
                                                >
                                                    {opciones[1]}
                                                </div>
                                                {/* {
                                                    opciones.map((o, io) => (
                                                        <div
                                                            key={io}
                                                            className={(io === 0) ? "btn-kill" : "btn-usering"}
                                                            data-key={il}
                                                            onClick={this.handlerOnClick}
                                                        >
                                                            {o}
                                                        </div>
                                                    ))
                                                } */}
                                            </div>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Home;