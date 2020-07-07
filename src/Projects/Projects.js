import React from 'react';
import styles from './Projects.module.css';
import ItemProjects from "./ItemProjects/ItemProjects";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title/Title";


function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title text='Projects'/>
                
                <div className={styles.projects}>
                    <ItemProjects title={"Social network"}/>
                    <ItemProjects title={"Todo list"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
