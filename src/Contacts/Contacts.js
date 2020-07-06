import React from 'react';
import styles from './Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>

                <div className={styles.sloganText}>
                    Контакты
                </div>

                <div className={styles.contactsContainer}>
                    <form className={styles.contactsForm}>
                        <div>
                            <input className={styles.input}/>
                        </div>

                        <div>
                            <input className={styles.input}/>
                        </div>

                        <div>
                            <textarea className={styles.textArea}/>
                        </div>
                    </form>
                </div>

                <div>
                    <button type="submit">Отправить</button>
                </div>

            </div>

        </div>
    );
}

export default Contacts;
