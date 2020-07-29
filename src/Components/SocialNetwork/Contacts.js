import React from 'react';
import styles from './Contacts.module.css';
import ItemContact from "./ItemContact/ItemContact";
import styleContainer from "../../common/styles/Container.module.css";
import Facebook from '../../assets/image/ContactsIkons/facebook.jpg';
import Mail from '../../assets/image/ContactsIkons/mail.jpg';
import Telephone from '../../assets/image/ContactsIkons/telephone.jpg';
import Telegramm from '../../assets/image/ContactsIkons/telegram.jpg';
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
    const telegrammIcon = {
        backgroundImage: `url(${Telegramm})`,
    };


    return (
        <div className={styles.socialNetworkBlock}>
            <div className={`${styleContainer.container} ${styles.socialNetworkContainer}`}>
                <Slide bottom cascade>
                    <div className={styles.iconSocial}>
                        <div className={styles.animation}>
                            <ItemContact style={telephoneIcon}
                                         href='tel:+37529 511 81 90'
                                         slogan='Call Me'/>
                        </div>
                        <div className={styles.animation}>
                            <ItemContact style={telegrammIcon}
                                         href='tg://resolve?domain=@VladSeeman'
                                         slogan='Write Me'/>
                        </div>
                        <div className={styles.animation}>
                            <ItemContact style={facebookIcon}
                                         href="https://www.facebook.com/vladislav.zharnikov/"
                                         slogan='Write Me'/>
                        </div>
                        <div className={styles.animation}>
                            <ItemContact style={mailIcon}
                                         href='mailto:vladislav613zharnikov@gmail.com'
                                         slogan='Email Me'/>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default Contacts;
