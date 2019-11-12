import React from 'react';
import styles from './Slogan.module.css';
import NavMenu from "../Header/NavMenu/NavMenu";


function Slogan() {
  return (
      <div className={styles.slogan}>
        <div className={styles.container}>
          <div className={styles.sloganText}>
            Рассматриваю варианты удаленной работы
          </div>
          <div>
            <button>Нанять меня</button>
          </div>
        </div>
      </div>
  );
}

export default Slogan;
