
import React, { useState } from 'react'
import StartButton from './startButton'
import GameRoom from './GameRoom'

export default function App() {
  const [start, setStart] = useState(false)

  return (
    <div>
      {start ? (
        <GameRoom />
      ) : (
        <StartButton onStart={() => setStart(true)} />
      )}
    </div>
  )
}

