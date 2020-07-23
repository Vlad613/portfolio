import React, {Component, useState} from 'react';
import styles from './NavMenu.module.scss';


class NavMenu extends Component {

    state = [
        {main: false},
        {skills: false},
        {projects: false},
        {contacts: false}];

    render() {
        return (
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
        );
    }
}

export default NavMenu;
