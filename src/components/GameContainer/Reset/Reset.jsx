import "./Reset.css";

export default function Reset({ onBtnClick }) {
  return (
    <>
      <button id="reset-button" onClick={onBtnClick}>
        Reset
      </button>
    </>
  );
}
