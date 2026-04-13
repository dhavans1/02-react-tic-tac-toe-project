import { useState, useRef, useEffect } from "react";

export default function Player({
  initName = "Player",
  symbol,
  notify,
  ...props
}) {
  const [playerName, setPlayerName] = useState(initName);
  const [prevName, setPrevName] = useState(initName);
  const [isEditing, setEditState] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef?.current) {
      setPrevName(playerName);
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleEditClick() {
    setEditState(!isEditing);
    setPrevName(playerName);
    setPlayerName(inputRef?.current?.value);
  }

  function onBlur() {
    if (inputRef.current.value === "") {
      inputRef.current.value = prevName ?? initName;
    }
    notify([inputRef.current.value, symbol === "X" ? 0 : 1]);
  }

  return (
    <>
      <div className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
            {...props}
            ref={inputRef}
            onKeyDown={(event) => event.key === "Enter" && onBlur()}
            onBlur={onBlur}
          />
        )}

        <span className="player-symbol">{symbol}</span>

        <button className="button" onClick={handleEditClick}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}
