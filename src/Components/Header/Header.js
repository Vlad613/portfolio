import React from 'react';
import styles from './Header.module.scss';
import NavMenu from "./NavMenu/NavMenu";
import styleContainer from "../../common/styles/Container.module.css";
import NavMenuMini from "./NavMenuMini/NavMenuMini";


const  Header=()=> {
    return (
        <div className={styles.headerBlock}>

            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <div className={styles.headerMiniDtlRow}>
                <a className={styles.navBarLogo}>Vlad</a>
                {/*<NavMenu/>*/}
                    <NavMenuMini/>
                </div>
            </div>
        </div>
    );
};

export default Header;
