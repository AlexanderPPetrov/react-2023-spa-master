import actionTypes from './action-types';
import { combineReducers } from "redux";
import { favoriteMovies } from './favorite-movies'

export function weather(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_WEATHER:
            return [...action.payload];
        default:
            return state;
    }
}


export default combineReducers({
    weather,
    favoriteMovies,
})