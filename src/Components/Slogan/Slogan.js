import React from 'react';
import styles from './Slogan.module.scss';
import styleContainer from "../../common/styles/Container.module.css";
import freelanceJob from '../../assets/image/freelanceJob.jpg'
import Slide from 'react-reveal/Slide';

const Slogan = () => {

    const FreelanceJob = {
        backgroundImage: `url(${freelanceJob})`,
    };


    return (
        <div id='contactsForm' className={styles.sloganBlock} style={FreelanceJob}>
            <div className={`${styleContainer.container} ${styles.sloganContainer}`}>
                <Slide bottom>
                    <div>
                        <div className={styles.sloganRow}>
                            <h2 className={styles.sloganText}>
                                LET'S WORK TOGETHER!
                            </h2>
                            <div>
                                <a href='mailto:vladislav613zharnikov@gmail.com' className={styles.sloganBtn}>HIRE ME!</a>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default Slogan;
