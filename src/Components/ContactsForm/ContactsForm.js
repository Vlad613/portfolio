import React from 'react';
import styles from './ContactsForm.module.scss';
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/Title/Title";
import Slide from 'react-reveal/Slide';
import {Field, reduxForm} from "redux-form";
import * as axios from 'axios';


let ContactsForm = (props) => {

    return (
        <form className={styles.contactsForm} onSubmit={props.handleSubmit}>
            <h5 className={styles.formTitle}>
                Send Me Your Message</h5>
            <div className={styles.formInputs}>
                <Field type="text" name='name' placeholder={"Your Name"} component={"input"}/>
                <Field type="text" name='contact' placeholder={"Your Email"} component={"input"}/>
            </div>
            <div className={styles.formText}>
                <Field name='message' placeholder={"Your message..."} component={"textarea"}/>
            </div>
            <div className={styles.formBtn}>
                <button type="submit" className={styles.submitBtn}>SEND</button>
            </div>
        </form>
    );
};

const ContactReduxForm = reduxForm({form: 'contacts'})(ContactsForm);
// export default ContactsForm

let Contacts = (props) => {

    let onSubmit = (formData) => {
        axios.post('http://localhost:3011/sendMessage', {
            name: formData.name,
            contacts: formData.contact,
            message: formData.message,
        })
            .then((response) => {
            // alert('Your message has been send')
        });
    };

    return (
        <div id='contactsForm' className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text='Contacts' titleSpan='SAY HELLO'/>
                <Slide bottom cascade>
                    <ContactReduxForm onSubmit={onSubmit}/>
                </Slide>
            </div>
        </div>

    );
};

export default Contacts;

