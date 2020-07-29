import React from 'react';
import styles from './Header.module.scss';
import NavMenuPc from "./NavMenu/NavMenuPc/NavMenuPc";
import styleContainer from "../../common/styles/Container.module.css";
import RollUpButton from "./HeaderButton/RollUpButton/RollUpButton";
import DeployedButton from "./HeaderButton/DeployedButton/DeployedButton";
import NavMenuMobile from "./NavMenu/NavMenuMobile/NavMenuMobile";
import Slide from 'react-reveal/Slide';
import {useState} from "react"


const Header = (props) => {
    window.addEventListener('resize', props.resizeHeader);

    const [headerActive, setHeaderActive] = useState(false);

    const onScroll = () => {{
            window.scrollY > 300 ?
                setHeaderActive(true) : setHeaderActive(false);
        }};

    window.addEventListener('scroll', onScroll);


    return (
        <Slide top when={headerActive}>
            <div className={headerActive ? `${styles.headerBlock} ${styles.headerBlockIn}` : styles.headerBlock}>
                <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                    <div className={styles.headerDtlRow}>
                        <a className={styles.navBarLogo}>Vlad</a>

                        {props.headerReducer.appWindowSize >= 1000 ?
                            <NavMenuPc/>
                            :
                            <div>
                                {props.headerReducer.headerMiniNavMenuOpen === false ?
                                    <RollUpButton openMiniNavMenu={props.openMiniNavMenu}/>
                                    :
                                    <DeployedButton closeMimiNavMenu={props.closeMimiNavMenu}/>
                                }
                            </div>
                        }
                    </div>
                    {props.headerReducer.headerMiniNavMenuOpen === true ?
                        <NavMenuMobile/> : <></>
                    }

                </div>
            </div>
        </Slide>
    );
};

export default Header;
