import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Slogan from "./Components/Slogan/Slogan";
import ContactsForm from "./Components/ContactsForm/ContactsForm";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/SocialNetwork/Contacts";
import NavMenuMini from "./Components/Header/NavMenuMini/NavMenuMini";


const App = (props) => {

    window.addEventListener('resize', props.resizeHeader);

    return (
        <div className="App">
            <div className="portfolio">
                {props.appReducer.appWindowSize >= 1000 ? <Header/> : <Header/>}
                <Main/>
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
