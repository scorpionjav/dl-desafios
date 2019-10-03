import React, { useState } from 'react';
import './Home.css';
import { getAll } from './../../services/hero.service';
import Context from '../../context/Context';
import Title from './../../components/title/Title';
import Container from './../../components/container/Container';
import Input from './../../components/input/Input';
import Table from './../../components/table/Table';

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

    /**
     * Metodo manejador del evento click para el DIV Btn Kill
     * @returns {function}
     */
    const handleKill = index => {
        return () => {
            let currentList = list;
            let selected = currentList.splice(index, 1)[0];
            selected.dead = true;
            let newList = currentList.concat(selected);
            setList(newList);
        }
    }

    /**
     * Metodo manejador del evento click para el DIV Btn UseRing
     * @returns {function}
     */
    const handleUseRing = index => {
        return () => {
            let currentList = list;
            let selected = currentList.find((l, i) => i === Number(index));
            selected.ring = true;
            setList(currentList);
            setRing(true);
        }
    }

    const data = {
        headers,
        list,
        options,
        ring,
    }

    return (
        <Context.Provider value={data}>
            <div className="home">
                <Title>Fellowship of the Ring</Title>
                <Container>
                    <Input placeholder="search hero" />
                    <Table
                        onKillHero={handleKill}
                        onUseRingHero={handleUseRing}
                    />
                </Container>
            </div>
        </Context.Provider>
    );
}

export default Home;
