import { useRef, useState } from "react";

export default function Block({playerIndex, index, onBtnClick, row, col, data, ...props}) {
    const btnRef = useRef(null);
    const [disabled, setDisabled] = useState(false);

    function handleClick() {
        btnRef.current.value = !playerIndex ? 'X' : 'O';
        onBtnClick(row, col, btnRef.current.value);
        setDisabled(data[row][col] !== '');
    }

    return (
        <button
            ref={btnRef}
            onClick={() => handleClick()}
            id={index}
            {...props}
        >
            <span>{ data[row][col] }</span>
        </button>
    );
}