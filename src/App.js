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
import {resizeHeaderForMobileActionCreator, resizeHeaderForPCActionCreator} from "./redux/app-reducer";
import HeaderMini from "./Components/Header/HeaderMini/HeaderMini";


const App = (store) => {

    let resizeHeaderForMobile = () => {
        appReducer.dispatch(resizeHeaderForMobileActionCreator)
    };
    let resizeHeaderForPC = () => {
        appReducer.dispatch(resizeHeaderForPCActionCreator)
    };


    return (
        <div className="App">
            <div className="portfolio">
                {!store.state.appReducer.smallHeaderMenu && <Header {resizeHeaderForMobile} />}
                {store.state.appReducer.smallHeaderMenu && <HeaderMini {resizeHeaderForPC}/>}
                {/*<HeaderMini/>*/}
                {/*<Header/>*/}
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
}

export default App;
