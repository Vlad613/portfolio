import React from 'react';
import styles from './Footer.module.css';
import ItemIconSocial from "./ItemIconSocial/ItemIconSocial";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>

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
