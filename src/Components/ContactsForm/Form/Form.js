import React from 'react';
import styles from './ContactsForm.module.scss';
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/Title/Title";
import Slide from 'react-reveal/Slide';
import {reduxForm} from "redux-form";

let ContactsForm = () => {
    // let pushFormMessage=()=>{
    //     axios.post('http://localhost:3011/sendMessage')
    // };

    const ReduxContactForm = reduxForm({form: 'ContactsForm'}) (ContactsForm);

    return (
        <div id='contactsForm' className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text='Contacts' titleSpan='SAY HELLO'/>

                <Slide bottom cascade>

                    <form className={styles.contactsForm}>
                        <h5 className={styles.formTitle}>
                            Send Me Your Message</h5>
                        <div className={styles.formInputs}>
                            <input type="text" id='name' placeholder={"Your Name"}/>
                            <input type="text" id='contact' placeholder={"Your Email"}/>
                        </div>
                        <div className={styles.formText}>
                            <textarea id='message' placeholder={"Your message..."}/>
                        </div>
                        <div className={styles.formBtn}>
                            <button type="submit" className={styles.submitBtn} >SEND</button>
                        </div>
                    </form>
                </Slide>
            </div>
        </div>

    );
};

export default ContactsForm;

