import {combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import headerReducer from "./header-reducer";


let reducers = combineReducers({headerReducer});

let store = createStore(reducers);

export default store;
