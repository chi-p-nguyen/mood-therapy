import React from 'react'
import dumbcat from '../images/dumbcat.jpg'
import bread from '../images/bread.jpg'
import './FunnyImages.css'
function FunnyImages() {
  const images = [dumbcat, bread]
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min
  const randomNum = () => getRandomNumber(0, images.length)
  const src = images[randomNum()]

  return (
    <div className="images-area">
      <p>A funny pic</p>
      <img src={src} alt="funny" />
    </div>
  )
}

export default FunnyImages
