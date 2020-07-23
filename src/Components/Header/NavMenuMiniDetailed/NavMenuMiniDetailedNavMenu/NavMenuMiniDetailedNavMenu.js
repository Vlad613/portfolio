import React, {Component} from 'react';
import styles from './NavMenuMiniDetailedNavMenu.module.scss';
import LinksBlock from "../../NavMenu/LinksBlock";


class NavMenuMiniDetailedNavMenu extends Component {

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

export default NavMenuMiniDetailedNavMenu;


