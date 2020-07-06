import React from 'react';
import styles from "./Skills.module.css"
import ItemSkills from "./ItemSkill/ItemSkills";
import styleContainer from '../common/styles/Container.module.css'


function Skills() {
    return (
        <div className={styles.skillsBlock}>

            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>

                <div className={styles.skills}>
                    <ItemSkills title={'React'} description={'I know'}/>
                    <ItemSkills title={'JS'}  description={'I learn'}/>
                    <ItemSkills title={'Redux'}  description={'I stink, that I know'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
