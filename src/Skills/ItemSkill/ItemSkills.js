import React from 'react';
import styles from './ItemSkills.module.scss';

let ItemSkills = (props) => {
    return (
        <div className={styles.itemSkillContainer}>

            <div className={styles.itemSkillsImage} style={props.style}>

            </div>

            <h3 className={styles.itemSkillsName}>
                {props.title}
            </h3>

            <span className={styles.description}>
                {props.description}
            </span>

        </div>
    );
}

export default ItemSkills;
