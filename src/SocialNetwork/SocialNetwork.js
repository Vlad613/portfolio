import React from 'react';
import styles from './SocialNetwork.module.css';
import ItemIconSocial from "./ItemIconSocial/ItemIconSocial";
import styleContainer from "../common/styles/Container.module.css";
import Facebook from '../assets/image/ContactsIkons/facebook.jpg';
import Mail from '../assets/image/ContactsIkons/mail.jpg';
import Telephone from '../assets/image/ContactsIkons/telephone.jpg';


let SocialNetwork = () => {

    const facebookIcon = {
        backgroundImage: `url(${Facebook})`,
    };
    const telephoneIcon = {
        backgroundImage: `url(${Telephone})`,
    };
    const mailIcon = {
        backgroundImage: `url(${Mail})`,
    };
    const facebookHref = "facebook.com/vladislav"


    return (
        <div className={styles.socialNetworkBlock}>
            <div className={`${styleContainer.container} ${styles.socialNetworkContainer}`}>

                <div className={styles.iconSocial}>
                    <ItemIconSocial style={telephoneIcon}
                                    href='+37529 511 81 90'
                                    slogan='Call Me'/>

                    <ItemIconSocial style={facebookIcon}
                                    href={facebookHref}
                                    slogan='Write Me'/>

                    <ItemIconSocial style={mailIcon}
                                    href='vladislavzharnikov@mail.ru'
                                    slogan='Email Me'/>

                </div>

            </div>

        </div>
    );
}

export default SocialNetwork;
