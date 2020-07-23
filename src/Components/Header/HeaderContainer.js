import React from 'react';
import './Header.module.scss';
import {resizeHeaderActionCreator} from "./../../redux/header-reducer";
import {connect} from 'react-redux';
import Header from "./Header.js";
import {closeMimiNavMenuActionCreator, openMimiNavMenuActionCreator} from "../../redux/header-reducer";


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
        },
        openMiniNavMenu: () => {
            dispatch(openMimiNavMenuActionCreator());
        },
        closeMimiNavMenu: () => {
            dispatch(closeMimiNavMenuActionCreator());
        },
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;