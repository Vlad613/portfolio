import React from 'react';
import styles from './Header.module.scss';
import NavMenuPc from "./NavMenuPc/NavMenuPc";
import styleContainer from "../../common/styles/Container.module.css";
import HeaderMiniButton from "./HeaderMiniButton/HeaderMiniButton";
import NavMenuMiniDetailedButton from "./NavMenuMiniDetailed/NavMenuMiniDetailedButton/NavMenuMiniDetailedButton";
import NavMenuMiniDetailedNavMenu from "./NavMenuMiniDetailed/NavMenuMiniDetailedNavMenu/NavMenuMiniDetailedNavMenu";


const Header = (props) => {
    window.addEventListener('resize', props.resizeHeader);
    return (
        <div className={styles.headerBlock}>

            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <div className={styles.headerDtlRow}>
                    <a className={styles.navBarLogo}>Vlad</a>

                    {props.headerReducer.appWindowSize >= 1000 ?
                        <NavMenuPc/>
                        :
                        <div>
                            {props.headerReducer.headerMiniNavMenuOpen === false ?
                                <HeaderMiniButton openMiniNavMenu={props.openMiniNavMenu}/>
                                :
                                <NavMenuMiniDetailedButton closeMimiNavMenu={props.closeMimiNavMenu}/>
                            }
                        </div>
                    }
                </div>
                {props.headerReducer.headerMiniNavMenuOpen === true ?
                    <NavMenuMiniDetailedNavMenu/> : <></>
                }

            </div>
        </div>
    );
};

export default Header;
