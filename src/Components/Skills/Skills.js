import React from 'react';
import styles from "./Skills.module.css"
import ItemSkills from "./ItemSkill/ItemSkills";
import styleContainer from '../../common/styles/Container.module.css'
import Title from "../../common/components/Title/Title";
import JsIcon from '../../assets/image/skillsIkons/JS.jpg'
import ReactIcon from '../../assets/image/skillsIkons/react.jpg'
import ReduxIcon from '../../assets/image/skillsIkons/redux.jpg'




let Skills=()=> {

    const jsIcon = {
        backgroundImage: `url(${JsIcon})`,
    };
    const reactIcon = {
        backgroundImage: `url(${ReactIcon})`,
    };
    const reduxIcon = {
        backgroundImage: `url(${ReduxIcon})`,
    };

    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>

                <Title text='Skills' titleSpan='WHAT I DO'/>

                <div className={styles.skills}>
                    <ItemSkills title={'JS'} description={'I learn'}  style={jsIcon}/>
                    <ItemSkills title={'React'} description={'I know'}  style={reactIcon}/>
                    <ItemSkills title={'Redux'} description={'I stink, that I know'} style={reduxIcon}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;