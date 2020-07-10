import React, {useState} from 'react';
import styles from './NavMenu.module.scss';


const NavMenu = () => {

    let [onFocusMode, setFocusMode] = useState(false);

    const activateFocusMode = () => {
        setFocusMode(true);
    };
    const deActivateFocusMode = () => {
        setFocusMode(false);
    };

    return (
        <div className={styles.navMenu}>
            <ul className={styles.navBarNav}>

                {!onFocusMode &&
                <li onMouseOver={activateFocusMode}>
                    <a href=''
                       className={styles.link}>MAIN</a></li>}

                {onFocusMode &&
                <li onMouseOut={deActivateFocusMode}>
                    <a href=''
                       className={styles.linkOnFocus}>MAIN</a></li>}

                {/*{!onFocusMode &&*/}
                {/*<li ><a href=''*/}
                {/*        className={styles.link}>SKILLS</a></li>}*/}
                {/*{onFocusMode &&*/}
                {/*<li><a href=''*/}
                {/*       className={styles.linkOnFocus}>SKILLS</a></li>}*/}
                {/*{!onFocusMode &&*/}
                {/*<li ><a href=''*/}
                {/*        className={styles.link}>PROJECTS</a></li>}*/}
                {/*{onFocusMode &&*/}
                {/*<li><a href=''*/}
                {/*       className={styles.linkOnFocus}>PROJECTS</a></li>}*/}

                {/*{!onFocusMode &&*/}
                {/*<li ><a href=''*/}
                {/*        className={styles.link}>CONTACTS</a></li>}*/}
                {/*{onFocusMode &&*/}
                {/*<li><a href=''*/}
                {/*       className={styles.linkOnFocus}>CONTACTS</a></li>}*/}

            </ul>
        </div>
    );
}

export default NavMenu;
