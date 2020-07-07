import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>

                <h3 className={styles.title}>
                    Контакты
                </h3>

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

                <div>
                    <button type="submit">Отправить</button>
                </div>

            </div>

        </div>
    );
}

export default Contacts;
