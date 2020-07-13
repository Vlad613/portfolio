import React, {useState} from 'react';
import styles from './NavMenu.module.scss';


const NavMenu = () => {

    let [onFocusMode, setFocusMode] = useState([
        {main: false},
        {skills: false},
        {projects: false},
        {contacts: false}]);

    debugger

    const activateFocusMode = (currentHref) => {
        setFocusMode({currentHref: true});
    };
    const deActivateFocusMode = (currentHref) => {
        setFocusMode({currentHref: false});
    };


    return (
        <div className={styles.navMenu}>
            <ul className={styles.navBarNav}>

                {!onFocusMode.main &&
                <li onMouseOver={()=>activateFocusMode(main)}>
                    <a href=''
                       className={styles.link}>MAIN</a></li>}

                {onFocusMode.main &&
                <li onMouseOut={deActivateFocusMode(main)}>
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
