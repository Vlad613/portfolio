import React from 'react';
import styles from './Slogan.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Slogan() {
  return (
      <div className={styles.sloganBlock}>
        <div className={`${styleContainer.container} ${styles.sloganContainer}`}>
          <h3 className={styles.sloganText}>
            Рассматриваю варианты удаленной работы
          </h3>
          <div>
            <button>Нанять меня</button>
          </div>
        </div>
      </div>
  );
}

export default Slogan;
