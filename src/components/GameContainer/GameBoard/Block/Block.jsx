import { useRef } from "react";

export default function Block({
  playerIndex,
  onBtnClick,
  row,
  col,
  data,
  ...props
}) {
  const btnRef = useRef(null);
  function handleClick() {
    btnRef.current.value = !playerIndex ? "X" : "O";
    onBtnClick({
      row: row,
      col: col,
      val: btnRef.current.value
    });
  }

  return (
    <button ref={btnRef} onClick={handleClick} {...props}>
      <span>{data[row][col]}</span>
    </button>
  );
}
