import {
    HERO_GET_ALL,
    HERO_ADD,
    HERO_DELETE,
    HERO_EDIT,
    HERO_KILL,
    HERO_USE_RING,
    HERO_SEARCH
} from '../const';

import { getAll } from './../../services/hero.service';

export const getAllHeroes = () => {
    return {
        type: HERO_GET_ALL,
        payload: getAll(),
    }
};

export const addHero = (hero) => {
    return {
        type: HERO_ADD,
        payload: hero,
    }
};

export const deleteHero = (hero) => {
    return {
        type: HERO_DELETE,
        payload: hero,
    }
};

export const editHero = (hero) => {
    return {
        type: HERO_EDIT,
        payload: hero,
    }
};

export const killHero = (id) => {
    return {
        type: HERO_KILL,
        payload: id,
    }
};

export const useRingHero = (id) => {
    return {
        type: HERO_USE_RING,
        payload: id,
    }
};

export const searchHero = (property, text) => {
    return {
        type: HERO_SEARCH,
        payload: (text === '' || text === undefined) ? getAll() : {property, text},
    }
};