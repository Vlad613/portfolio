import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


let Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>

                <div className={styles.text}>
                    <span>HELLO, I AM</span>
                    <h1>Vlad Zharnikov</h1>
                    <p>I am Front-end Developer</p>

    </div>

            </div>

        </div>
    );
}

export default Main;
