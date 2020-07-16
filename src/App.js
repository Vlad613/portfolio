import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import ContactsForm from "./ContactsForm/ContactsForm";
import Footer from "./Footer/Footer";
import Contacts from "./SocialNetwork/Contacts";
import NavMenuMiniDetailed from "./Header/NavMenuMiniDetailed/NavMenuMiniDetailed";


function App() {
  return (
    <div className="App">
      <div className="portfolio">
        <NavMenuMiniDetailed/>
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
