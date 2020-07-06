import React from 'react';
import styles from './ItemSkills.module.css';

let ItemSkills = (props) => {
    return (
        <div className={styles.itemSkill}>

            <div className={styles.itemSkillsImage}>
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
