import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      // console.log(res.data);
      setCharacterData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">STAR WARS BIRTH YEARS</h1>
      {characterData && characterData.map(char => {
        return <Character
        key={char.created}
        characterName={char.name}
        characterBirthYear={char.birth_year}
        />
      })}
    </div>
  );
}

export default App;
