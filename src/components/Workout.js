/* import React, { useState, useEffect } from 'react' */
import React from 'react'
function Workout() {
  /*  const [move, setMove] = useState()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const moves = [
      '10 wall push-ups',
      'Now 10 table push-ups',
      'Now jump up and down. UP DOWN UP DOWN',
      'Now dance like monkeys',
    ]
    const timer = setTimeout(() => {
      setMove(moves[index])
      if (index < moves.length - 1) {
        setIndex(index + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [index]) */
  const moves = [
    '10 wall push-ups',
    'Now 10 table push-ups',
    'Now jump up and down. UP DOWN UP DOWN',
    'Now dance like monkeys',
  ]
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min
  const randomNum = () => getRandomNumber(0, moves.length)
  const move = moves[randomNum()]
  return (
    <div className="workout-area">
      <p>{move}</p>
    </div>
  )
}

export default Workout
