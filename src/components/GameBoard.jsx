import { useState } from "react"


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard({ onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleClickButton(rowIndex, colIndex) {
        setGameBoard((prevGameBaord) => {
            const updatedBoard = [...prevGameBaord.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard
        })
        console.log("btn clicked");

        onSelectSquare()
    }


    return (
    <ol id="game-board">
     {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleClickButton(rowIndex, colIndex)}>{playerSymbol}</button></li> )}
        </ol>
     </li> )}

  
    </ol>
    )
}

export default GameBoard