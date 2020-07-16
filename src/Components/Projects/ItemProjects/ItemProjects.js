import React from 'react';
import styles from './ItemProjects.module.scss';


let ItemProjects = (props) => {
    return (
        <div className={styles.itemProject}>
            <div className={styles.itemProjectsImage} style={props.style}>
                <a className={styles.itemProjectsButton} onClick={props.href}>View</a>
            </div>
            <span className={styles.itemProjectsDescription}>{props.description}</span>
            < h3> {props.title}</h3>
        </div>
    )
}
export default ItemProjects;




