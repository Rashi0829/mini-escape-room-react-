
import React from 'react'
import { useState } from 'react'
import './GameRoom2.css'
import './win.css'
import riddles from './riddle'

function GameRoom2() {
  const [answer, setAnswer] = useState('')
  const [win, setWin] = useState(false)
  const [currentRiddle, setCurrentRiddle] = useState(
  () => riddles[Math.floor(Math.random() * riddles.length)]
)

  function Unlock1() {
    if (answer.trim().toLowerCase() ===  currentRiddle.answer.toLowerCase()) {
      setWin(true)
    } else {
      alert("Incorrect, please try again!")
    }
  }

  function Reset() {
    setAnswer('')
  }

  function Restart() {
    setWin(false)
    setAnswer('')
  }

  return (
    <div>
      {win ? (
        <div className="win-screen">
          <h1>YOU WIN! 🏆</h1>
          <p>Congratulations! You escaped the Hidden Chamber!</p>

          <button onClick={Restart}>RESTART</button>
        </div>
      ) : (
        <>
          <h1>— Room 2: The Hidden Chamber</h1>

          <p>
            — You escaped the Forgotten Room, but a new mystery awaits!
          </p>

          <h2>Clue 2</h2>

         
            <p>{currentRiddle.question}</p>
          

          <input
            type="text"
            className="answer"
            placeholder="Enter your Answer here"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button onClick={Unlock1}>Unlock</button>

          <button onClick={Reset}>RESET</button>
        </>
      )}
    </div>
  )
}

export default GameRoom2
