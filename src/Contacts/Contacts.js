import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title/Title";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text='Contacts' titleSpan='SAY HELLO'/>

                <form className={styles.contactsForm}>

                    <h5 className={styles.contactsFormHead}>Contact Form</h5>

                    <div className={styles.contactsFormRow}>
                        <div className={styles.contactsFormInputContainer}>
                            <div className={styles.contactsFormInput}>
                                <input type="text" placeholder={"Your Name"}/>
                            </div>
                        </div>
                        <div className={styles.contactsFormInputContainer}>
                            <div className={styles.contactsFormInput}>
                                <input type="text" placeholder={"Your Email"}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactsFormRow}>
                        <div className={styles.contactsFormTextContainer}>
                            <div className={styles.contactsFormText}>
                                <textarea placeholder={"Your message..."}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactsFormRow}>
                        <div className={styles.contactsFormButtonContainer}>
                        <button type="submit" className={styles.submitBtn}>SEND</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
