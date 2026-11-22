import React, { useState } from 'react'
import './gameroom.css'
import GameRoom2 from './GameRoom2'
import riddles from './riddle'

function GameRoom() {
  const [answer, setAnswer] = useState('')
  const [room, setRoom] = useState(false)
  const [currentRiddle, setCurrentRiddle] = useState(
  () => riddles[Math.floor(Math.random() * riddles.length)]
)

  function Unlock() {
    if (answer.trim().toLowerCase() == currentRiddle.answer.toLowerCase()) {
      setRoom(true)
    } else {
      alert("Incorrect, please try again!")
    }
  }

  function Reset() {
    setAnswer('')
  }

  return (
    <div className="game-room">
      <div>
        {room ? (
          <GameRoom2 />
        ) : (
          <>
            <h1>You are Trapped!!!!!</h1>
            <h2>Room 1: The Forgotten Room</h2>
            <p>Find the clues to escape</p>

            <div className="clue">
              <h3>clue 1</h3>
          <p>{currentRiddle.question}</p>

              <input
                type="text"
                className="answer"
                placeholder="Enter your Answer here"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <button onClick={Unlock}>Unlock</button>
              <button className="reset" onClick={Reset}>RESET</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default GameRoom;