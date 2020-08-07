import React from 'react';
import styles from '../../Components/ContactsForm/ContactsForm.module.scss';


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formText}>
            <textarea {...input} {...props} className={hasError && styles.error}/>
            {hasError && <div className={styles.errorMessage}>some error</div>}
        </div>
    )
};