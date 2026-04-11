import Player from "./Player/Player";

export default function Players({Selector="li", players, setPlayerNames, ...props}) {

    function updatePlayerNames(val, i) {
        players[i] = val;
        setPlayerNames(players);
    }

    return (
        <>
            <ul {...props}>
                <Selector>
                    <Player
                        initName={players[0]}
                        symbol="X"
                        disabled={true}
                        notify={([v, i]) => updatePlayerNames(v, i)}
                    ></Player>
                </Selector>
                <Selector>
                    <Player
                        initName={players[1]}
                        symbol="Y"
                        disabled={true}
                        notify={([v, i]) => updatePlayerNames(v, i)}
                    ></Player>
                </Selector>
            </ul>
        </>
    );
}