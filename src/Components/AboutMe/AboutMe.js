import React from 'react';
import styles from './AboutMe.module.scss';
import MainPhotoMiniTest from '../../assets/image/MainPhotoMiniTest.jpg';
import Slide from 'react-reveal/Slide';
import {useState} from "react"



const AboutMe = () => {

    const [isAboutMeActive, setAboutMeActive] = useState(false);

    const onScroll = () => {{
        window.scrollY > 100?
        setAboutMeActive(true):setAboutMeActive(false);
    }};

    window.addEventListener('scroll',onScroll);


    const mainPhotoMiniTest = {backgroundImage: `url(${MainPhotoMiniTest})`};

    return (
        <Slide bottom  when={isAboutMeActive}>
            <div id='aboutMe'
                 className={isAboutMeActive ? `${styles.AboutMeBlock} ${styles.AboutMeBlockIn}` : styles.AboutMeBlock}>
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
    );
};

export default AboutMe;