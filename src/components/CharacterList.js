import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import {Link, useParams} from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character').then(res => {
      const results = res.data.results.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      setCharacters(results);
    }).catch(err => console.log(err))
  }, [query]);

  console.log(characters);

  return (
    <section className="character-list">
      <SearchForm setQuery = {setQuery} query = {query}/>
      {characters.map(item => (
      <CharacterCard char = {item}/>
      ))}
    </section>
  );
}
