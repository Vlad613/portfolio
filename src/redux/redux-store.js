import {combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    headerReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;
