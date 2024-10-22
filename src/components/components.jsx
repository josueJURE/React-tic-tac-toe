import { useState } from "react";


function PlayerName({initialName, symbol, isActive}) {
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setisEditing] = useState(false);


    function handleEditClick() {
        setisEditing(isEditing => !isEditing)
    }

    function handleChange(e) {
        setplayerName(e.target.value)
    }

    let editablePalyerName = <span className="player-name">{playerName}</span> 


    if(isEditing) {
        editablePalyerName = (
            <input type="text" required value={playerName} onChange={handleChange}></input>

        )
    }


    
    return (
        <li className={isActive ? "active": undefined}>
            <span>
                {editablePalyerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
          </li>
    )
}

export default PlayerName