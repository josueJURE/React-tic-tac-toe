import PlayerName from "./components/components"
import GameBoard from "./components/GameBoard"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <PlayerName initialName="josue" symbol="x"/>
        <PlayerName initialName="Delphine" symbol="0"/>
        
        </ol>

        <GameBoard/>

      </div>
    </main>
  )
}

export default App
