import React from 'react';
import './Header.module.scss';
import {resizeHeaderActionCreator} from "./../../redux/header-reducer";
import {connect} from 'react-redux';
import Header from "./Header.js";


let mapStateToProps = (state) => {
    return {
        headerReducer: state.headerReducer
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        resizeHeader: () => {
            let windowSize = window.innerWidth;
            dispatch(resizeHeaderActionCreator(windowSize));
        }
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;