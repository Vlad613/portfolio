import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import ContactsForm from "./ContactsForm/ContactsForm";
import Footer from "./Footer/Footer";
import Contscts from "./SocialNetwork/Contscts";


function App() {
  return (
    <div className="App">
      <div className="portfolio">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Slogan/>
        <ContactsForm/>
        <Contscts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
