import { useState } from 'react'
import './App.css'

import AnimDelay from './Components/AnimDelay'
import AnimWaterFall from './Components/AnimWaterFall'

function App() {

  return (
    <div className="app">
      <AnimWaterFall initialDelay={1} gap={0.5}>
        <h1>Hello!</h1>
        <h4>What would you like to do?</h4>
        <h4>(Not much apparently)</h4>
        </AnimWaterFall>
      <footnote></footnote>
    </div>
  )
}

export default App
