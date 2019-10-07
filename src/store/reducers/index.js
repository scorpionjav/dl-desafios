import { combineReducers } from 'redux';
import heroesReducer from './hero.reducer';

const reducers = combineReducers({
    heroes: heroesReducer,
});

export default reducers;