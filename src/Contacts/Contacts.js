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
                    <textarea/>
                    <button type="submit" className={styles.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
