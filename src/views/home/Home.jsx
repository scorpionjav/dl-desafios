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
            opciones: ['☠ Kill', '💍 Use Ring']
        };
    }

    render() {
        const { encabezados, lista, opciones } = this.state;
        return (
            <div className="home">
                <Title>Fellowship of the Ring</Title>
                <Container>
                    <Input placeholder="search hero" />
                    <Table>
                        <Thead>
                            <Tr>
                                {encabezados.map((e, ie) => (<Th key={ie}>{e}</Th>))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                lista.map((l, il) => (
                                    <Tr key={il}>
                                        <Td>{l.name}</Td>
                                        <Td>{l.race}</Td>
                                        <Td>{l.age}</Td>
                                        <Td>{l.weapon}</Td>
                                        <Td>
                                            <div className="controls">
                                                {opciones.map((o,io) => (<div key={io}>{o}</div>))}
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