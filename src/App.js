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
import appReducer from '../src/redux/app-reducer'
import {
    // resizeHeaderForMobileActionCreator,
    // resizeHeaderForPCActionCreator,
    resizeHeaderActionCreator
} from "./redux/app-reducer";
import HeaderMini from "./Components/Header/HeaderMini/HeaderMini";


const App = (store) => {


    let resizeHeader = () => {
        let windowSize = window.innerWidth;
        appReducer.dispatch(resizeHeaderActionCreator(windowSize))
    };

    window.addEventListener('resize', resizeHeader);


    return (
        <div className="App">
            <div className="portfolio">
                {store.state.appReducer.appWindowSize >= 1000 ? <Header/> : <HeaderMini/>}
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
