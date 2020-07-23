import React from 'react';
import './App.scss';
import {resizeHeaderActionCreator} from "./redux/app-reducer";
import {connect} from 'react-redux';
import App from "./App";


let mapStateToProps = (state) => {
    // return {
    //     appReducer: state.appReducer
    // }
};

let mapDispatchToProps = (dispatch) => {
    // return {
    //     resizeHeader: () => {
    //         let windowSize = window.innerWidth;
    //         dispatch(resizeHeaderActionCreator(windowSize));
    //     }
    // }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
