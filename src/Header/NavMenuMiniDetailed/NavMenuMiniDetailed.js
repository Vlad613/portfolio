import React, {Component} from 'react';
import styles from './NavMenuMiniDetailed.module.scss';
import styleContainer from "../../common/styles/Container.module.css";



class NavMenuMiniDetailed extends Component {

    state = [
        {main: false},
        {skills: false},
        {projects: false},
        {contacts: false}];

    render() {
        return (
            <div className={styles.headerBlockNavMini}>

                <div className={`${styleContainer.container} ${styles.headerContainer}`}>

                    <div className={styles.navMenuMiniDtlRow}>
                    <a className={styles.navBarLogo}>Vlad</a>
                        <button className={styles.navBarBtn}>
                            <svg className={styles.svgContainer} viewBox="0 0 100 100" width="60">
                                <path className={styles.lineTop}
                                      d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path>
                                <path className={styles.lineMiddle} d="m 30,50 h 40"></path>
                                <path className={styles.lineBottom}
                                      d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
                            </svg>
                        </button>

                    </div>

                    <div className={styles.navMenu}>
                        <ul className={styles.navBarNav}>

                            {!this.state.main &&
                            <li onMouseOver={() => this.setState({main: true})}>
                                <a href=''
                                   className={styles.link}>MAIN</a></li>}

                            {this.state.main &&
                            <li onMouseOut={() => this.setState({main: false})}>
                                <a href=''
                                   className={styles.linkOnFocus}>MAIN</a></li>}

                            {!this.state.skills &&
                            <li onMouseOver={() => this.setState({skills: true})}>
                                <a href=''
                                   className={styles.link}>SKILLS</a></li>}

                            {this.state.skills &&
                            <li onMouseOut={() => this.setState({skills: false})}>
                                <a href=''
                                   className={styles.linkOnFocus}>SKILLS</a></li>}

                            {!this.state.projects &&
                            <li onMouseOver={() => this.setState({projects: true})}>
                                <a href=''
                                   className={styles.link}>PROJECTS</a></li>}

                            {this.state.projects &&
                            <li onMouseOut={() => this.setState({projects: false})}>
                                <a href=''
                                   className={styles.linkOnFocus}>PROJECTS</a></li>}

                            {!this.state.contacts &&
                            <li onMouseOver={() => this.setState({contacts: true})}>
                                <a href=''
                                   className={styles.link}>CONTACTS</a></li>}

                            {this.state.contacts &&
                            <li onMouseOut={() => this.setState({contacts: false})}>
                                <a href=''
                                   className={styles.linkOnFocus}>CONTACTS</a></li>}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default NavMenuMiniDetailed;


