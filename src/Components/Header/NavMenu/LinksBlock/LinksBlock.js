import React, {Component, useState} from 'react';
import styles from './LinksBlock.module.scss';


class LinksBlock extends Component {

    state = [
        {main: false},
        {skills: false},
        {projects: false},
        {contacts: false}];

    render() {
        return (
            <>
                {!this.state.main &&
                <li onClick={() => this.setState({main: true})}>
                    <a href=''
                       className={styles.link}>MAIN</a></li>}

                {this.state.main &&
                <li onBlur={() => this.setState({main: false})}>
                    <a href=''
                       className={styles.linkOnFocus}>MAIN</a></li>}

                {!this.state.skills &&
                <li onClick={() => this.setState({skills: true})}>
                    <a href=''
                       className={styles.link}>SKILLS</a></li>}

                {this.state.skills &&
                <li onBlur={() => this.setState({skills: false})}>
                    <a href=''
                       className={styles.linkOnFocus}>SKILLS</a></li>}

                {!this.state.projects &&
                <li onClick={() => this.setState({projects: true})}>
                    <a href=''
                       className={styles.link}>PROJECTS</a></li>}

                {this.state.projects &&
                <li onBlur={() => this.setState({projects: false})}>
                    <a href=''
                       className={styles.linkOnFocus}>PROJECTS</a></li>}

                {!this.state.contacts &&
                <li onClick={() => this.setState({contacts: true})}>
                    <a href=''
                       className={styles.link}>CONTACTS</a></li>}

                {this.state.contacts &&
                <li onBlur={() => this.setState({contacts: false})}>
                    <a href=''
                       className={styles.linkOnFocus}>CONTACTS</a></li>}
            </>
        );
    }
}

export default LinksBlock;
