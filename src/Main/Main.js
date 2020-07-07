import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


let Main = () => {
    return (
        <div className={styles.main}>
            <div className={styleContainer.container}>

                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>
                        <span>My name is</span>
                        <br/>
                        <span> Vlad Zharnikov</span>
                    </h1>
                    <div className={styles.title}>

                    </div>
                    <p>I am Front-end Developer</p>
                </div>

                <div className={styles.photo}>
                    <img src='' alt=''/>
                </div>

            </div>
        </div>
    );
}

export default Main;
