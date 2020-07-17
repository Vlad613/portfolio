import React from 'react';
import styles from './Header.module.scss';
import NavMenu from "./NavMenu/NavMenu";
import styleContainer from "../../common/styles/Container.module.css";
import HeaderMini from "./HeaderMini/HeaderMini";


const  Header=()=> {
    return (
        <div className={styles.headerBlock}>

            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <a className={styles.navBarLogo}>Vlad</a>
                {/*<NavMenuMini/>*/}
                <NavMenu/>
            </div>
        </div>
    );
};

export default Header;
