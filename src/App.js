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
import {resizeHeaderActionCreator} from "./redux/app-reducer";
import {useDispatch} from 'react-redux';
import HeaderMini from "./Components/Header/HeaderMini/HeaderMini";


const App = (props) => {

    const  dispatch= useDispatch();

debugger
    let resizeHeader = () => {

        let windowSize = window.innerWidth;
       dispatch(resizeHeaderActionCreator(windowSize))
    };
debugger
    window.addEventListener('resize', resizeHeader);


    return (
        <div className="App">
            <div className="portfolio">
                {props.state.appReducer.appWindowSize >= 1000 ? <Header/> : <HeaderMini/>}
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
