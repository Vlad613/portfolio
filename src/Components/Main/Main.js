import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.css'
import MainPhotoTest from '../../assets/image/MainPhotoTest.jpg'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';
import {useState} from "react"


let Main = () => {

    const MainPhoto = {
        backgroundImage: `url(${MainPhotoTest})`,
    };

    const [mainTextActive, setMainTextActive] = useState(false);

    const onScroll = () => {
        {
            window.scrollY > 100 ?
                setMainTextActive(true) : setMainTextActive(false);
        }
    };

    window.addEventListener('scroll', onScroll);

    return (
        <div id='main' className={styles.mainBlock}>
            <Fade>
                <div className={styles.mainBlockPhoto} style={MainPhoto}>
                    <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                        <Slide top when={!mainTextActive}>
                            <div className={mainTextActive ? `${styles.text} ${styles.textOut}` : styles.text}>
                                <span>HELLO, I AM</span>
                                <h1>Vlad Zharnikov</h1>
                                <p>I am Front-end Developer</p>
                            </div>
                        </Slide>

                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Main;
