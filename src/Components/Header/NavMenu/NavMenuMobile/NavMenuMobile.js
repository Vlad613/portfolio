import React, {Component} from 'react';
import styles from './NavMenuMobile.module.scss';
import LinksBlock from "../LinksBlock/LinksBlock";


class NavMenuMobile extends Component {

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

export default NavMenuMobile;


