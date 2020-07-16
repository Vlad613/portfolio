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
import NavMenuMiniDetailed from "./Components/Header/HeaderMiniDetailed/NavMenuMiniDetailed";


function App() {


    let resizeHeaderForMobile =()=>{
        let action ={type:'RESIZE-WINDOW-FOR-MOBILE'}
        appReducer.dispatch(action)
    };

    let resizeHeaderForPC =()=>{
       let action ={type:'RESIZE-WINDOW-FOR-PC'}
        appReducer.dispatch(action)
    };


  return (
    <div className="App">
      <div className="portfolio">
        {/*<NavMenuMiniDetailed/>*/}
        <Header/>
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
