import React from 'react';
import styles from './Header.module.scss';
import NavMenu from "./NavMenu/NavMenu";
import styleContainer from "../../common/styles/Container.module.css";
import NavMenuMini from "./NavMenuMini/NavMenuMini";
import NavMenuMiniDetailed from "./HeaderMiniDetailed/NavMenuMiniDetailed";


const  Header=(props)=> {
    window.addEventListener('resize', props.resizeHeader);
    return (
        <div className={styles.headerBlock}>

            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <div className={styles.headerDtlRow}>
                <a className={styles.navBarLogo}>Vlad</a>
                    {props.headerReducer.appWindowSize >= 1000 ?
                        <NavMenu/> :  <NavMenuMini/>
                        // /*<NavMenuMiniDetailed/> :  <NavMenuMiniDetailed/>*/
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
