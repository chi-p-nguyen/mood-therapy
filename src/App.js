import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import Greeting from './components/Greeting'
import Jokes from './components/Jokes'
import Action from './components/Action'
import Workout from './components/Workout'
import FunnyImages from './components/FunnyImages'
import './App.css'

function App() {
  const [activity, setActivity] = useState()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const activities = [<Jokes />, <Action />, <Workout />, <FunnyImages />]
    const timer = setTimeout(() => {
      setActivity(activities[index])
      if (index < activities.length - 1) {
        setIndex(index + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className="App">
      <div className="welcome-area">
        <p>
          Feeling sad? Here's a quick 3-minute fun session to make you happy
        </p>
        <Greeting />
        <div className="button-area">
          <Button text="Go to therapy" color="yellow" />
          <Button text="Send jokes" color="green" />
        </div>
      </div>
      <div className="therapy-area">{activity}</div>
    </div>
  )
}

export default App
