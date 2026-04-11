import { useEffect, useState } from "react";
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

    useEffect(() => {
        checkGameStatus();
    }, [data]);

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
            } else if (blockClickCounter === 9) {
                updateResult('It\'s a Tie!');
            }
        }
    }

    function handleLogic(row, col, val) {
        updateBlockClick((blockClickCounter) => blockClickCounter + 1);
        // data[row][col] = val;
        // updateData(data);
        // NOTE: Don't update existing data matrix like above since it will mutate the array but keep the same reference. 
        // If there is no change in the variable's reference address then React will no re-render thinking there's no change in the variable
        // This applies to variables with references - Arrays and objects
        // Hence deep copying the matrix below and updatinsg the state with it
        
        updateData((data) => {
            const updatedData = [...data.map(v => [...v])];
            updatedData[row][col] = val;
            return updatedData;
        });

        // checkGameStatus(); Executing here will NOT work since it's executed immediately (closure) before the state update done above. So, use useEffect.
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

            <Reset onBtnClick={resetGame}></Reset>
        </>
    );
}