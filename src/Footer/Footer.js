import React from 'react';
import styles from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";



function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <div className={styles.footerText}>
                    © 2020 Vlad Zharnikov
                </div>
            </div>
        </div>

    );
}

export default Footer;
