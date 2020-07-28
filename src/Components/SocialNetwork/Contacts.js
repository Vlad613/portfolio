import React from 'react';
import styles from './Contacts.module.css';
import ItemContact from "./ItemContact/ItemContact";
import styleContainer from "../../common/styles/Container.module.css";
import Facebook from '../../assets/image/ContactsIkons/facebook.jpg';
import Mail from '../../assets/image/ContactsIkons/mail.jpg';
import Telephone from '../../assets/image/ContactsIkons/telephone.jpg';
import Slide from 'react-reveal/Fade';

let Contacts = () => {

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
                <Slide bottom cascade>
                    <div className={styles.iconSocial}>
                        <div>
                            <ItemContact style={telephoneIcon}
                                         href='+37529 511 81 90'
                                         slogan='Call Me'/>
                        </div>
                        <div>
                            <ItemContact style={facebookIcon}
                                         href="https://www.facebook.com/vladislav.zharnikov"
                                         slogan='Write Me'/>
                        </div>
                        <div>
                            <ItemContact style={mailIcon}
                                         href='vladislavzharnikov@mail.ru'
                                         slogan='Email Me'/>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default Contacts;
