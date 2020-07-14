import React from 'react';
import styles from './ItemIconSocial.module.scss';


let ItemIconSocial = (props) => {
    return (
        <div className={styles.itemIconContainer}>
            <div className={styles.itemIconSocial}>
                <div className={styles.contactIcon} style={props.style}>

                </div>
                <div className={styles.contactDetail}>
                    <a href={""}>{props.href}</a>
                    <p>{props.slogan}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemIconSocial;
