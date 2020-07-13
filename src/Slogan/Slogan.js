import React from 'react';
import styles from './Slogan.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import freelanceJob from '../assets/image/freelanceJob.jpg'


function Slogan() {

    const FreelanceJob = {
        backgroundImage: `url(${freelanceJob})`,
    };


    return (
        <div className={styles.sloganBlock} style={FreelanceJob}>
            <div className={`${styleContainer.container} ${styles.sloganContainer}`}>
                <div className={styles.sloganRow}>
                    <h2 className={styles.sloganText}>
                        LET'S WORK TOGETHER!
                    </h2>
                    <div>
                        <a href={''} className={styles.sloganBtn}>HIRE ME!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
