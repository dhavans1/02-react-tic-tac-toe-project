import Player from "./Player/Player";

export default function Players({
  Selector = "li",
  players,
  activePlayerIndex,
  setPlayerNames,
  ...props
}) {
  function updatePlayerNames(val, i) {
    players[i].name = val;
    setPlayerNames(players);
  }

  return (
    <>
      <ul {...props}>
        <Selector className={activePlayerIndex === 0 ? "active" : undefined}>
          <Player
            initName={players[0].name}
            symbol="X"
            notify={([v, i]) => updatePlayerNames(v, i)}
          ></Player>
        </Selector>
        <Selector className={activePlayerIndex === 1 ? "active" : undefined}>
          <Player
            initName={players[1].name}
            symbol="Y"
            notify={([v, i]) => updatePlayerNames(v, i)}
          ></Player>
        </Selector>
      </ul>
    </>
  );
}
