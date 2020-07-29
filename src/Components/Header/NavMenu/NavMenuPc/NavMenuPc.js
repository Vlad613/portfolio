import React from 'react';
import styles from './NavMenuPc.module.scss';
import LinksBlock from "../LinksBlock/LinksBlock";


function NavMenuPc() {
    return (

        <div className={styles.navBarNav}>
            <LinksBlock/>
        </div>
    );
}

export default NavMenuPc;
