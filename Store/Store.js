import { createStore, combineReducers } from 'redux';

const reducerPrueba = (state=[0], action ) => state;

const reducers = combineReducers({
    reducerPrueba,
})

const store = createStore(reducers); 