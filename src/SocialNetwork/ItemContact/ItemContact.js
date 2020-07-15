import React from 'react';
import styles from './ItemContact.module.scss';


let ItemContact = (props) => {
    return (
        <div className={styles.itemIconContainer}>

                <div className={styles.contactDetail}>
                    <a href={props.href}>
                        <div className={styles.contactIcon} style={props.style}>
                        </div>
                    </a>
                    <p>{props.slogan}</p>
                </div>
            </div>
    );
}

export default ItemContact;
