import React from 'react';
import styles from "./Skills.module.css"
import ItemSkills from "./ItemSkill/ItemSkills";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>

                <div className={styles.mySkills}>
                    <span> Мои скиллы</span>
                </div>

                <div className={styles.allSkills}>

                    <div className={styles.itemSkill}>
                        <ItemSkills/>
                    </div>

                    <div className={styles.itemSkill}>
                        <ItemSkills/>
                    </div>

                    <div className={styles.itemSkill}>
                        <ItemSkills/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
