import React from 'react';
import styles from './Footer.module.css';
import ItemIconSocial from "./ItemIconSocial/ItemIconSocial";
import styleContainer from "../common/styles/Container.module.css";


function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>

                <div className={styles.footerText}>
                    Влад Жарников
                </div>

                <div className={styles.iconSocial}>

                    <div>
                        <ItemIconSocial/>
                    </div>
                    <div>
                        <ItemIconSocial/>
                    </div>
                    <div>
                        <ItemIconSocial/>
                    </div>
                    <div>
                        <ItemIconSocial/>
                    </div>

                </div>


                <div>
                    © 2019 Все права защищены
                </div>

            </div>

        </div>
    );
}

export default Footer;
