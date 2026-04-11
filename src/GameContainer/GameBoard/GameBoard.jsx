import { useState } from "react";
import Block from "./Block/Block";
import Reset from "../Reset/Reset";
import GameOver from "../GameOver/GameOver";

export default function GameBoard({gameData, ...props}) {
    const [p1, p2] = Object.values({...props.players});
    const initData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    const [blockClickCounter, updateBlockClick] = useState(0);
    const [data, updateData] = useState(initData);
    const [gameResult, updateResult] = useState(null);

    function checkGameStatus() {
        if (blockClickCounter > 2) {
            if (
                (data[0][0] === 'X' && data[0][1] === 'X' && data[0][2] === 'X') ||
                (data[1][0] === 'X' && data[1][1] === 'X' && data[1][2] === 'X') ||
                (data[2][0] === 'X' && data[2][1] === 'X' && data[2][2] === 'X') ||

                (data[0][0] === 'X' && data[1][0] === 'X' && data[2][0] === 'X') ||
                (data[0][1] === 'X' && data[1][1] === 'X' && data[2][1] === 'X') ||
                (data[0][2] === 'X' && data[1][2] === 'X' && data[2][2] === 'X') ||

                (data[0][0] === 'X' && data[1][1] === 'X' && data[2][2] === 'X') ||
                (data[2][0] === 'X' && data[1][1] === 'X' && data[0][2] === 'X')
            ) {
                updateResult(p1 + ' Won!');
            } else if (
                (data[0][0] === 'O' && data[0][1] === 'O' && data[0][2] === 'O') ||
                (data[1][0] === 'O' && data[1][1] === 'O' && data[1][2] === 'O') ||
                (data[2][0] === 'O' && data[2][1] === 'O' && data[2][2] === 'O') ||

                (data[0][0] === 'O' && data[1][0] === 'O' && data[2][0] === 'O') ||
                (data[0][1] === 'O' && data[1][1] === 'O' && data[2][1] === 'O') ||
                (data[0][2] === 'O' && data[1][2] === 'O' && data[2][2] === 'O') ||

                (data[0][0] === 'O' && data[1][1] === 'O' && data[2][2] === 'O') ||
                (data[2][0] === 'O' && data[1][1] === 'O' && data[0][2] === 'O')
            ) {
                updateResult(p2 + ' Won!');
            } else if (blockClickCounter === 8) {
                updateResult('It\'s a Tie!');
            }
        }
    }

    function handleLogic(row, col, val) {
        updateBlockClick(blockClickCounter + 1);
        data[row][col] = val;
        updateData(data);
        checkGameStatus();
        gameData([row, col, val]);
    }

    function resetGame() {
        updateData(initData);
        updateBlockClick(0);
        gameData([]);
        updateResult(null);
    }

    return (
        <>
            <div id="pre-game" {...props}>
                {
                    data.map((row, i) => (

                        <ol key={i}>
                            {
                                row.map((_, j) => (
                                    <Block 
                                        key={i + j}
                                        playerIndex={blockClickCounter > 0 ? blockClickCounter % 2 : undefined}
                                        onBtnClick={handleLogic}
                                        row={i}
                                        col={j}
                                        data={data}
                                        disabled={data[i][j] !== ''}
                                    />
                                ))
                            }
                        </ol>
                    ))
                }
            </div>

            {
                gameResult && <GameOver
                    result={gameResult}
                    onClick={resetGame}
                ></GameOver>
            }

            <Reset onBtnClick={() => resetGame}></Reset>
        </>
    );
}