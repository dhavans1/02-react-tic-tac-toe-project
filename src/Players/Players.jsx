import Player from "./Player/Player";

export default function Players({Selector="li", ...props}) {
    return (
        <>
            <ul {...props}>
                <Selector>
                    <Player 
                        initName="Player 1"
                        symbol="X"
                        disabled="true"
                    ></Player>
                </Selector>
                <Selector>
                    <Player
                        initName="Player 2"
                        symbol="Y"
                        disabled="true"
                    ></Player>
                </Selector>
            </ul>
        </>
    );
}