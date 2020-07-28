import React from 'react';
import styles from './AboutMe.module.scss';
import MainPhotoMiniTest from '../../assets/image/MainPhotoMiniTest.jpg';
import Slide from 'react-reveal/Slide';



const AboutMe = () => {

    const mainPhotoMiniTest = {backgroundImage: `url(${MainPhotoMiniTest})`};

    const aboutMeRollDown =`${styles.AboutMeBlock} ${styles.AboutMeBlockIn}`;
    const aboutMeRollUp =styles.AboutMeBlock;

    return (
        <Slide bottom>
            <div className={aboutMeRollUp}>
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