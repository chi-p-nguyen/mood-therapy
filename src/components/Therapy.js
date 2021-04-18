import React, { useState, useEffect } from 'react'
import Nar from './Nar'
import Jokes from './Jokes'
import Action from './Action'
import Workout from './Workout'
import FunnyImages from './FunnyImages'
import ReactAudioPlayer from 'react-audio-player'
import crystaldolphin from '../images/crystal-dolphin.mp3'
import pianocat from '../images/pianocat.gif'
function Therapy() {
  const [activity, setActivity] = useState()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const activities = [
      { act: <Nar text="Hi there. You look sad :(" />, time: 2000 },
      { act: <Nar text="Lets think about a good memory" />, time: 3000 },
      {
        act: <Nar text="like the time your crush said they like you" />,
        time: 3000,
      },
      { act: <Nar text="wait...I'm sorry, that didn't happen" />, time: 3000 },
      { act: <Nar text="then lets start with a Joke shall we?" />, time: 3000 },
      { act: <Jokes />, time: 3000 },
      { act: <Nar text="Haha Funny right?..." />, time: 5000 },
      { act: <Nar text="No?" />, time: 2000 },
      { act: <Nar text="Lets do something else then" />, time: 2000 },
      {
        act: (
          <Nar text="Maybe you've been sitting for too long... It could make your butt sore" />
        ),
      },
      { act: <Action />, time: 5000 },
      { act: <Nar text="Good job standing up." />, time: 7000 },
      { act: <Nar text="While you're there, lets workout!" />, time: 2000 },
      { act: <Workout />, time: 2000 },
      {
        act: <Nar text="Good job working out. Here's a reward" />,
        time: 12000,
      },
      { act: <FunnyImages />, time: 2000 },
      {
        act: (
          <Nar text="If you don't already found it, there's another one. Scroll ways down" />
        ),
        time: 6000,
      },
      { act: <Nar text="I know life's been tough baby" />, time: 6000 },
      { act: <Nar text="I'm tired too" />, time: 4000 },
      { act: <Nar text="But stay strong baby" />, time: 4000 },
      { act: <Nar text="I'm always here for you <3" />, time: 4000 },
      {
        act: <Nar text="We'll get through this together okay <3" />,
        time: 2000,
      },
      { act: <Nar text="I love you   (jk)" />, time: 2000 },
      {
        act: <Nar text="Now keep dancing!!!" />,
        time: 1000,
      },
      { act: <img src={pianocat} alt="piano" /> },
    ]
    const timer = setTimeout(
      () => {
        setActivity(activities[index].act)
        if (index < activities.length - 1) {
          setIndex(index + 1)
        }
      },
      activities[index].time ? activities[index].time : 3000
    )
    return () => clearTimeout(timer)
  }, [index])
  return (
    <>
      {activity}
      <ReactAudioPlayer src={crystaldolphin} autoPlay />
    </>
  )
}

export default Therapy
