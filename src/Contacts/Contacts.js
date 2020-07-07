import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>
                    Контакты
                </h2>

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
