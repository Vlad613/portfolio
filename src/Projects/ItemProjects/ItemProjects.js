import React from 'react';
import styles from './ItemProjects.module.css';


let ItemProjects = (props) => {
    return (
        <div className={styles.itemProject}>
            <div className={styles.itemProjectsImage}>
                <a className={styles.itemProjectsButton}>View</a>
            </div>
            <span className={styles.itemProjectsDescription}>{props.description}</span>
            < h3> {props.title}
            </h3>

        </div>
    )
}
export default ItemProjects;




