import {combineReducers, createStore} from "redux";

initialState = {
    smallHeaderMenu: false
};


dispatch(action) {
    if (action.type === 'RESIZE-WINDOW-FOR-MOBILE') {
        state.headerReducer.smallHeaderMenu = true;
    }else if (action.type === 'RESIZE-WINDOW-FOR-PC') {
        state.headerReducer.smallHeaderMenu = false;
    }
}

let reducers = combineReducers({

});

let store = createStore(reducers);

export default store;