import { useState, useRef } from "react";

export default function Player({initName = "Player", symbol, ...props}) {

    const [playerName, updatePlayerName] = useState(initName);
    const inputRef = useRef(null);
    let prevName = initName;

    function clearPlayerName() {
        prevName = inputRef.current.value;
        inputRef.current.value = '';
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    function onBlur() {
        if (inputRef.current.value === '') {
            inputRef.current.value = prevName;
        }
        inputRef.current.disabled = true;
    }

    return (
        <>
            <div className="player">
                <input
                    type="text"
                    value={playerName}
                    onChange={(event) => updatePlayerName(event.target.value)}
                    className="player-name"
                    {...props}
                    ref={inputRef}
                    onBlur={() => onBlur()}
                />

                <span className="player-symbol">{symbol}</span>

                <button
                    className="button"
                    onClick={() => clearPlayerName()}
                >
                    Edit
                </button>
            </div>
        </>
    );
}