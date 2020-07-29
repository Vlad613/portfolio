import React from 'react';
import './App.scss';
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Slogan from "./Components/Slogan/Slogan";
import ContactsForm from "./Components/ContactsForm/ContactsForm";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/SocialNetwork/Contacts";
import HeaderContainer from "./Components/Header/HeaderContainer";
import AboutMe from "./Components/AboutMe/AboutMe";


const App = () => {

    return (
        <div className="App">
            <div className="portfolio">
                <HeaderContainer/>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <ContactsForm/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
};


export default App;
