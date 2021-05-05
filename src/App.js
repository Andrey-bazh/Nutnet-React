import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import '../src/styles/reset.scss'
import HeaderMain from "./components/Header/HeaderMain";
import OurStory from "./components/OurStory/OurStory";
import Expertise from "./components/Expertise/Expertise";
import MeatTeam from "./components/MeetTeam/MeetTeam";
import OurWorks from "./components/OurWorks/OurWorks";
import { BrowserRouter as Router}  from "react-router-dom";
import Reviews from "./components/Reviews/Reviews";
import MainForm from "./components/MainForm/MainForm";

function App() {
  return (
      <Router>
    <div className="App">
        <Header/>
        <HeaderMain/>
        <OurStory/>
        <Expertise/>
        <MeatTeam/>
        <OurWorks/>
        {/*<Reviews/>*/}
        <MainForm/>
    </div>
      </Router>
  );
}

export default App;
