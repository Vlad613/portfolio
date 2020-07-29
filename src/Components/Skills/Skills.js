import React from 'react';
import styles from "./Skills.module.scss"
import ItemSkills from "./ItemSkill/ItemSkills";
import styleContainer from '../../common/styles/Container.module.css'
import Title from "../../common/components/Title/Title";
import JsIcon from '../../assets/image/skillsIkons/JS.jpg'
import ReactIcon from '../../assets/image/skillsIkons/react.jpg'
import ReduxIcon from '../../assets/image/skillsIkons/redux.jpg'
import HtmlIcon from '../../assets/image/skillsIkons/html_css.jpg'
import Slide from "react-reveal/Fade";


let Skills = () => {

    const jsIcon = {
        backgroundImage: `url(${JsIcon})`,
    };
    const reactIcon = {
        backgroundImage: `url(${ReactIcon})`,
    };
    const reduxIcon = {
        backgroundImage: `url(${ReduxIcon})`,
    };
    const htmlIcon = {
        backgroundImage: `url(${HtmlIcon})`,
    };

    return (
        <div id='skills' className={styles.skillsBlock}>

            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>

                <Title text='Skills' titleSpan='WHAT I DO'/>
                <Slide left cascade>
                    <div className={styles.skills}>
                        <div className={styles.animation}>
                            <ItemSkills title={'HTML/CSS & SASS'}
                                        style={htmlIcon}/>
                        </div>
                        <div>
                            <ItemSkills title={'JS'}
                                        style={jsIcon}/>
                        </div>
                        <div>
                            <ItemSkills title={'React'}
                                        style={reactIcon}/>
                        </div>
                        <div>
                            <ItemSkills title={'Redux'}
                                        style={reduxIcon}/>
                        </div>
                    </div>
                </Slide>
            </div>

        </div>
    );
}

export default Skills;
