import React from 'react';
import styles from './Projects.module.css';
import ItemProjects from "./ItemProjects/ItemProjects";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title/Title";


let Projects=()=> {
    const socialNetworkImage = {
        backgroundImage: 'url('+ imgUrl +')',
    };

    const toDoLostImage = {
        backgroundImage: 'url('+ imgUrl +')',
    };

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title text='Projects' titleSpan='PORTFOLIO'/>
                
                <div className={styles.projects}>
                    <ItemProjects title={"Social network"} description={"my work social network "}/>
                    <ItemProjects title={"Todo list"} description={"what i can do"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
