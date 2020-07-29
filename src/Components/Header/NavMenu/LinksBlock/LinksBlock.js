import React from 'react';
import styles from './LinksBlock.module.scss';
import {Link} from "react-scroll";


function LinksBlock() {
    return (
        <>
            <li>
                <Link
                    activeClass={styles.linkOnFocus}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href=''
                    className={styles.link}>MAIN</Link>

            </li>
            <li>
                <Link
                    activeClass={styles.linkOnFocus}
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                    href=''
                    className={styles.link}>ABOUT ME</Link>
            </li>
            <li>
                <Link
                    activeClass={styles.linkOnFocus}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href=''
                    className={styles.link}>SKILLS</Link>
            </li>

            <li>
                <Link
                    activeClass={styles.linkOnFocus}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href=''
                    className={styles.link}>PROJECTS</Link>
            </li>
            <li>
                <Link
                    activeClass={styles.linkOnFocus}
                    to="contactsForm"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href=''
                    className={styles.link}>CONTACTS</Link>
            </li>
        </>
    );
}

export default LinksBlock;
