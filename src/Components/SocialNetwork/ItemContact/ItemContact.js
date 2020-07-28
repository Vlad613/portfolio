import React from 'react';
import styles from './ItemContact.module.scss';


let ItemContact = (props) => {
    return (
        <div className={styles.itemIconContainer}>

            <div className={styles.contactDetail}>
                <a href={props.href}>
                    <div className={styles.contactIcon} style={props.style}>
                    </div>

                    <p>{props.slogan}</p>
                </a>
            </div>
        </div>
    );
};

export default ItemContact;
