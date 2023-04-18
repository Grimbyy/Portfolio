import { useReducer, useState, useEffect } from 'react'
import './App.css'

import AnimDelay from './Components/AnimDelay';
import AnimWaterFall from './Components/AnimWaterFall';
import CardTile from './Components/CardTile';
import Card from './Components/Card';

function reducer(state, action) {
  return {...state, [action.title]: action.style };
}

function App() {

  const [state, dispatch] = useReducer(reducer, {});

  function onCardClick(e, {title, ref}) {
    dispatch({
      title,
      style: {
        animation: 'blowup 5s forwards',
      }
    });
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="app">
      <AnimWaterFall initialDelay={1} gap={0.5}>
        <h1>Hello!</h1>
        <h4>What would you like to see?</h4>
        <CardTile >
          <AnimWaterFall initialDelay={2} gap={0.5}>
            <Card onClick={onCardClick} title={"Tech Stack"} customStyle={state} text={"Languages and Libraries"}/>
            <Card onClick={onCardClick} title={"Personal Projects"} customStyle={state} text={"Spare time activities/hobbies"}/>
            <Card onClick={onCardClick} title={"Socials"} customStyle={state} text={"The best way to reach me!"}/>
            <Card onClick={onCardClick} title={"Games"} customStyle={state} text={""}/>
          </AnimWaterFall>
        </CardTile>
      </AnimWaterFall>
    </div>
  )
}

export default App
