import React from 'react';
import styles from './Contacts.module.css';
import ItemContact from "./ItemContact/ItemContact";
import styleContainer from "../common/styles/Container.module.css";
import Facebook from '../assets/image/ContactsIkons/facebook.jpg';
import Mail from '../assets/image/ContactsIkons/mail.jpg';
import Telephone from '../assets/image/ContactsIkons/telephone.jpg';


let Contscts = () => {

    const facebookIcon = {
        backgroundImage: `url(${Facebook})`,
    };
    const telephoneIcon = {
        backgroundImage: `url(${Telephone})`,
    };
    const mailIcon = {
        backgroundImage: `url(${Mail})`,
    };



    return (
        <div className={styles.socialNetworkBlock}>
            <div className={`${styleContainer.container} ${styles.socialNetworkContainer}`}>

                <div className={styles.iconSocial}>
                    <ItemContact style={telephoneIcon}
                                 href='+37529 511 81 90'
                                 slogan='Call Me'/>

                    <ItemContact style={facebookIcon}
                                 href="https://www.facebook.com/vladislav.zharnikov"
                                 slogan='Write Me'/>

                    <ItemContact style={mailIcon}
                                 href='vladislavzharnikov@mail.ru'
                                 slogan='Email Me'/>

                </div>

            </div>

        </div>
    );
}

export default Contscts;
