import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';
import {Switch, Route} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />

      <Switch>
        <Route path = '/characters' component = {CharacterList}/>
        <Route path = '/' component = {WelcomePage}/>
      </Switch>
    </main>
  );
}
