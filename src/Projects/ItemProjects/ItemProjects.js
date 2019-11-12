import React from 'react';
import styles from './ItemProjects.module.css';


function ItemProjects() {
    return (
        <div className={styles.itemProjects}>

            <div className={styles.itemProjectsImage}>
                        Картинка
                        <div className={styles.itemProjectsButton}>
                            <button> Смотреть</button>
                        </div>
            </div>

            <div className={styles.itemProjectsDescription}>
                <div className={styles.itemProjectsName}>
                    Название проекта
                </div>
                <div className={styles.itemProjectsSpecification}>
                     Краткое описание
                </div>
            </div>
        </div>
    );
}

export default ItemProjects;
