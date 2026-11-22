import React from 'react'
import './start.css'
import { useState } from 'react';
import GameRoom from './GameRoom';

function StartButton() {
  const [start, setStart] = useState(false);

  return (
    <div className="welcome-screen">


    <div >
      {start ? (
        <GameRoom />
      ) : (
        <>
          <h1>Escape Room</h1>
          <h2>waiting for you</h2>
          <h2>Welcome</h2>
          <h4>Tap Here to Start</h4>

          <button
            className="start"
            onClick={() => setStart(true)}
          >
            {start ? "started" : "start"}
          </button>
        </>
      ) }
    </div>
    </div> 
  )
}
export default StartButton;