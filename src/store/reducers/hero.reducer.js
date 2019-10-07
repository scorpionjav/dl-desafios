import {
    HERO_GET_ALL,
    HERO_ADD,
    HERO_DELETE,
    HERO_EDIT,
    HERO_KILL,
    HERO_USE_RING,
    HERO_SEARCH
} from '../const';

const initialState = {
    heroes:  [],
};

const heroesReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case HERO_GET_ALL:
            return {
                ...prevState,
                heroes: action.payload,
            };
        case HERO_ADD:
            return {
                ...prevState,
                heroes: prevState.heroes.concat({
                    id: prevState.heroes.length === 0 ? 1 : (prevState.heroes[prevState.heroes.length-1].id + 1),
                    ...action.payload
                }),
            };
        case HERO_DELETE:
            return {
                ...prevState,
                heroes: prevState.heroes.filter(hero => hero.id !== action.payload),
            };
        case HERO_EDIT:
            return {
                ...prevState,
                heroes: prevState.heroes.map(hero => {
                    const isCurrentHero = hero.id === action.payload.id;
                    return isCurrentHero ? action.payload : hero;
                  }),
            };
        case HERO_KILL:
            return {
                ...prevState,
                heroes: prevState.heroes.concat({
                    ...prevState.heroes.splice(prevState.heroes.findIndex((hero)=> hero.id === action.payload), 1)[0],
                    dead: true
                }),
            };
        case HERO_USE_RING:
            return {
                ...prevState,
                heroes: prevState.heroes.map(hero => {
                    const isCurrentHero = hero.id === action.payload;
                    return isCurrentHero ? ({...hero, ring: true }) : hero;
                }),
            };
        case HERO_SEARCH:
            return {
                ...prevState,
                heroes: (action.payload.text === undefined || action.payload.text === '') ? action.payload
                        : prevState.heroes.filter(hero => hero[action.payload.property].toLowerCase().includes((action.payload.text).toLowerCase())),
            };
        default:
            return prevState;
    }
}

export default heroesReducer;