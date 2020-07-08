import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title/Title";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text='Contacts' titleSpan='SAY HELLO'/>

                <form className={styles.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type="submit" className={styles.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
