import "./Logger.css";

export default function Logger({ logs, players, handleJumpClick }) {
  function handleOnClick(log) {
    handleJumpClick(log);
  }

  return (
    <div className="logger-container">
      <p>Game play log</p>
      <ul className="logger-list" id="log">
        {logs?.map((log, i) => (
          <li key={"log-" + i}>
            <span key={"log-span-p-" + i}>
              {(i % 2 === 0 ? players[0].name : players[1].name) +
                ` (${log.val}) `}
            </span>
            <span key={"log-span-selection-p-" + i}>
              {` selected (${log.row}, ${log.col})`}
            </span>
            {i !== 0 ? (
              <button
                key={"log-jump-btn-" + i}
                className="jump-button"
                onClick={() => handleOnClick(log)}
              >
                Jump
              </button>
            ) : (
              <span key={"dummy-" + i}></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
