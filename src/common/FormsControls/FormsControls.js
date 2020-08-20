import React from 'react';
import styles from '../../Components/ContactsForm/ContactsForm.module.scss';
import styleContainer from "../styles/Container.module.css";


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formText}>
            <textarea {...input} {...props} className={hasError && styles.error}/>
            {hasError && <div className={styles.errorMessage}>The field must be filled in and contain at least 30 characters.</div>}
        </div>
    )
};
export const InputName = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formText}>
            <input {...input} {...props} className={hasError && styles.error}/>
            {hasError && <div className={`${styles.errorMessageInput} ${styles.errorMessageInputName}`}>The field must be filled in.</div>}
        </div>
    )
};
export const InputEmail = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formText}>
            <input {...input} {...props} className={hasError && styles.error}/>
            {hasError && <div className={`${styles.errorMessageInput} ${styles.errorMessageInputEmail}`}>The field must be filled in.</div>}
        </div>
    )
};
