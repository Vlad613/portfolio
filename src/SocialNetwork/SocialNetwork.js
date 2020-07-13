import React from 'react';
import styles from './SocialNetwork.module.css';
import ItemIconSocial from "./ItemIconSocial/ItemIconSocial";
import styleContainer from "../common/styles/Container.module.css";


let SocialNetwork = () => {
    return (
        <div className={styles.socialNetworkBlock}>
            <div className={`${styleContainer.container} ${styles.socialNetworkContainer}`}>

                <div className={styles.iconSocial}>

                    <div>
                        <ItemIconSocial href='+37529 511 81 90'
                                        slogan='Call Me'/>
                    </div>
                    <div>
                        <ItemIconSocial/>
                    </div>
                    <div>
                        <ItemIconSocial/>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SocialNetwork;
