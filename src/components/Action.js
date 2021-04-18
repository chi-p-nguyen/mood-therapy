import React from 'react'

function Action() {
  const actions = [
    'Go say hi to your roommate',
    'Go tell that joke to your roommate',
  ]
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min
  const randomNum = () => getRandomNumber(0, actions.length)
  const action = actions[randomNum()]
  return (
    <div className="actions-area">
      <h3>Hmm not feeling better yet? Get up and...</h3>
      <p>{action}</p>
      <p>And while you're there. Tell them I say hi too</p>
    </div>
  )
}

export default Action
