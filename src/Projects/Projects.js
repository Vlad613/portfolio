import React from 'react';
import styles from './Projects.module.css';
import ItemProjects from "./ItemProjects/ItemProjects";


function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.myProjects}>
                    Мои работы
                </h2>

                <div className={styles.allProjects}>
                    <ItemProjects title={"Social network"}/>
                    <ItemProjects title={"Todo list"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
