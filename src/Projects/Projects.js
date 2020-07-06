import React from 'react';
import styles from './Projects.module.css';
import ItemProjects from "./ItemProjects/ItemProjects";


function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>

                <div className={styles.myProjects}>
                    Мои работы
                </div>

                <div className={styles.allProjects}>

                    <div className={styles.itemProject}>
                        <ItemProjects/>
                    </div>

                    <div className={styles.itemProject}>
                        <ItemProjects/>
                    </div>

                    <div className={styles.itemProject}>
                        <ItemProjects/>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Projects;
