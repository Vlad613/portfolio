import React, {Component, useState} from 'react';
import styles from './NavMenuPc.module.scss';
import LinksBlock from "../LinksBlock/LinksBlock";


class NavMenuPc extends Component {

    state = [
        {main: false},
        {skills: false},
        {projects: false},
        {contacts: false}];

    render() {
        return (

            <div className={styles.navBarNav}>
                <LinksBlock/>
            </div>
        );
    }
}

export default NavMenuPc;
