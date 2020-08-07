import {combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer";
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    headerReducer,
    form: formReducer
});

const store = createStore(reducers);

export default store;
