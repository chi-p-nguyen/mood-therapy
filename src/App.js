import React, { useState } from 'react'
import Button from './components/Button'
import Greeting from './components/Greeting'
import Therapy from './components/Therapy'
import './App.css'
import quietcat from './images/quietcat.gif'
import Add from './components/Add'

function App() {
  const [start, setStart] = useState(false)
  const startTherapy = () => setStart(true)
  return (
    <div className="App">
      <Add />
      <div className="welcome-area">
        <p>
          Feeling sad? Here's a quick 2-minute fun session to make you happy
        </p>
        <Greeting />
        <div className="button-area">
          <Button
            text="Go to therapy"
            color="yellow"
            dest="therapy"
            onClick={startTherapy}
          />
          <Button text="Send jokes" color="green" />
        </div>
      </div>
      <div className="therapy-area" id="therapy">
        {start ? <Therapy /> : null}
      </div>
      <img id="quiet-cat" src={quietcat} alt="quietcat" />
    </div>
  )
}

export default App
