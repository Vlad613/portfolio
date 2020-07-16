import React from 'react';
import styles from './Projects.module.scss';
import ItemProjects from './ItemProjects/ItemProjects';
import styleContainer from '../../common/styles/Container.module.css';
import Title from '../../common/components/Title/Title';
import socialNetwork from '../../assets/image/SocialNetwork.jpg'
import toDoList from '../../assets/image/toDoList.jpg'


let Projects = () => {
    const socialNetworkImage = {
        backgroundImage: `url(${socialNetwork})`,
    };

    const toDoLostImage = {
        backgroundImage: `url(${toDoList})`,
    };
 const socialNetworkHref = 'https://vlad613.github.io/social_network/'
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title text='Projects' titleSpan='PORTFOLIO'/>

                <div className={styles.projects}>
                    <ItemProjects href={socialNetworkHref}
                                  title={"Social network"}
                                  description={"my work social network "}
                                  style={socialNetworkImage}/>
                    <ItemProjects title={"Todo list"}
                                  description={"what i can do"}
                                  style={toDoLostImage}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
