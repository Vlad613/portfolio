import React from 'react';
import styles from './ItemProjects.module.css';


let ItemProjects = (props) => {
    return (
        <div className={styles.itemProject}>
            <div className={styles.itemProjectsImage}>
                <a className={styles.itemProjectsButton}>Смотреть</a>
            </div>
            < h3> {props.title}
            </h3>
            <span className={styles.itemProjectsDescription}>{props.description}</span>
        </div>
    )
}
export default ItemProjects;




