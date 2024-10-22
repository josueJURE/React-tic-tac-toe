import PlayerName from "./components/components";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {

  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X"

  )

  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <PlayerName initialName="josue" symbol="X" isActive={activePlayer === "X"}/>
        <PlayerName initialName="Delphine" symbol="O" isActive={activePlayer === "O"}/>
        
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>

      </div>
    </main>
  )
}

export default App
