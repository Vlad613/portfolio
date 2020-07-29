import React from 'react';
import {useState} from 'react';
import styles from './AboutMe.module.scss';
import MainPhotoMiniTest from '../../assets/image/MainPhotoMiniTest.jpg';
import Slide from 'react-reveal/Slide';
import {Link} from "react-scroll";


const AboutMe = () => {


        const mainPhotoMiniTest = {backgroundImage: `url(${MainPhotoMiniTest})`};


        return (
            <Link
                activeClass={styles.linkOnFocus}
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                href=''
                className={styles.AboutMeBlock}>
            <Slide bottom >
                <div  id='aboutMe' className={styles.AboutMeBlock}>
                    <div className={styles.AboutMeContainer}>
                        <div className={styles.AboutMeRow}>
                            <div className={styles.AboutMeText}>
                                <h2>About Me</h2>
                                <p>Passionate designer & developer who loves simplicity
                                    in things and crafts beautiful user interfaces with love.</p>
                            </div>
                            <div className={styles.AboutMePhotoBlock}>
                                <img className={styles.AboutMePhoto} style={mainPhotoMiniTest}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            </Link>
        );
    }
;


export default AboutMe;