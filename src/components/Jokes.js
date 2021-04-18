import React from 'react'
import './Jokes.css'
function Jokes() {
  const jokes = [
    'My friend David lost his ID... Now we just call him Dave',
    "What's worse than ants in your pants? Uncles",
    'If you are willing to jump off a bridge, because your wife cheated on you... just remember it is a pair of horns, and not a pair of wings.',
  ]

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min
  const randomNum = () => getRandomNumber(0, jokes.length)
  const joke = jokes[randomNum()]

  return (
    <div className="jokes-area">
      <h3>Are you bored? Here's a joke!</h3>
      <p>{joke}</p>
    </div>
  )
}

export default Jokes
