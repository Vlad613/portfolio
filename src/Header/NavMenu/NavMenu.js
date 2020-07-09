import React from 'react';
import styles from './NavMenu.module.scss';



const NavMenu = () => {
    let navLinkOnFocus = "styles.linkOnFocus";
    let navLinkOffFocus = "styles.link";


    return (
        <div className={styles.navMenu}>
            <ul className={styles.navBarNav}>
                <li><a href=''


                >MAIN</a></li>
                <li><a href='' className={styles.link}>SKILLS</a></li>
                <li><a href='' className={styles.link}>PROJECTS</a></li>
                <li><a href='' className={styles.link}>CONTACTS</a></li>
            </ul>
        </div>
    );
}

export default NavMenu;
