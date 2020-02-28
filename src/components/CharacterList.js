import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import data from './dummydata';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState();
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  //   axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character').then(res => {
  //     setCharacters(res.data.results);
  //   }).catch(err => console.log(err))
  // }, []);

  console.log(characters);

  return (
    <section className="character-list">
      <SearchForm/>
      {data.map(item => (
        <CharacterCard char = {item}/>
      ))}
    </section>
  );
}
