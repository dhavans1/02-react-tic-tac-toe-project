import { useState, useRef } from "react";

export default function Player({initName = "Player", symbol, notify, ...props}) {

    const [playerName, updatePlayerName] = useState(initName);

    const inputRef = useRef(null);
    let prevName = initName;

    function clearPlayerName() {
        prevName = inputRef.current.value;
        updatePlayerName('');
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    function onBlur() {
        if (inputRef.current.value === '') {
            inputRef.current.value = prevName;
        }
        notify([inputRef.current.value, symbol === 'X' ? 0 : 1]);
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
                    disabled={true}
                    onKeyDown={(event) => event.key === 'Enter' && onBlur()}
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