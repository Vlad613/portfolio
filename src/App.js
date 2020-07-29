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
import {useState} from "react"

const App = () => {

    // const [state, setAboutMeActive] = useState({isAboutMeActive:false});
    //
    // const onScroll = () => {{
    //     debugger
    //     window.scrollY > 150?
    //         setAboutMeActive({isAboutMeActive:true}):setAboutMeActive({isAboutMeActive:false});
    // }};
    // debugger
    // window.addEventListener('scroll',onScroll);

    return (
        <div className="App">
            <div className="portfolio">
                <HeaderContainer/>
                <Main/>
                <AboutMe
                    // isAboutMeActive={state.isAboutMeActive}
                />
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
