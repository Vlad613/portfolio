import React from 'react';
import styles from './ContactsForm.module.scss';
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/Title/Title";


function ContactsForm() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text='Contacts' titleSpan='SAY HELLO'/>



                <form className={styles.contactsForm}>
                    <h5 className={styles.formTitle}>
                        Send Me Your Message</h5>
                    <div className={styles.formInputs}>
                        <input type="text" placeholder={"Your Name"}/>
                        <input type="text" placeholder={"Your Email"}/>
                    </div>
                    <div className={styles.formText}>
                    <textarea placeholder={"Your message..."}/>
                    </div>
                    <div className={styles.formBtn}>
                    <button type="submit" className={styles.submitBtn}>SEND</button>
                    </div>
                </form>
                </div>
            </div>

    );
}

export default ContactsForm;

