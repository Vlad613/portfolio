import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import MainPhotoTest from '../../assets/image/MainPhotoTest.jpg'
import Fade from 'react-reveal/Fade';



let Main = () => {

    const MainPhoto = {
        backgroundImage: `url(${MainPhotoTest})`,
    };

    return (
        <div id='main' className={styles.mainBlock}>
            <Fade>
            <div className={styles.mainBlockPhoto} style={MainPhoto}>
                <div className={`${styleContainer.container} ${styles.mainContainer}`}>

                    <div className={styles.text}>
                        <span>HELLO, I AM</span>
                        <h1>Vlad Zharnikov</h1>
                        <p>I am Front-end Developer</p>
                    </div>

                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Main;
