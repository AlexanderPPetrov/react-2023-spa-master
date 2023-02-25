import actionTypes from './action-types';
import {combineReducers} from "redux";

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
})