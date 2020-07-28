import React from 'react';
import styles from "./Title.module.scss"


 const Title=(props)=> {
    return (
        <div className={styles.titleBlock}>
            <span>{props.titleSpan}</span>
            <h2 className={styles.title}>{props.text}</h2>
        </div>
    );
}

export default Title;
