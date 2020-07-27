import React from 'react';
import styles from './AboutMe.module.scss';
import styleContainer from "../../common/styles/Container.module.css";
import MainPhotoMiniTest from '../../assets/image/MainPhotoMiniTest.jpg';



let AboutMe=()=> {

    const mainPhotoMiniTest = {
        backgroundImage: `url(${MainPhotoMiniTest})`,
    };

    return (
        <div className={styles.AboutMeBlock}>
            <div className={styles.AboutMeContainer
                // `${styleContainer.container} ${styles.AboutMeContainer}`
            }>
                <div className={styles.AboutMeRow}>
                    <div className={styles.AboutMeText}>
                        <h2>About Me</h2>
                        <p>Passionate designer & developer who loves simplicity
                            in things and crafts beautiful user interfaces with love.</p>
                    </div>
                    <div className={styles.AboutMePhotoBlock}>
                        <img className={styles.AboutMePhoto}  style={mainPhotoMiniTest}  />
                    </div>
                </div>
            </div>
        </div>

    );
};


export default AboutMe;