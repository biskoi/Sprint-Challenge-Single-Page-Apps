import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

export default function App(props) {

  return (
    <main>
      <Navbar/>
      <Jumbotron/>
      <Switch>
        <Route path = '/characters' component = {CharacterList}/>
        <Route path = '/' component = {WelcomePage}/>
      </Switch>

    </main>
  );
}
