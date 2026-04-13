import "./Logger.css";

export default function Logger({ logs, players }) {
  return (
    <div className="logger-container">
      <p>Game play log</p>
      <ul className="logger-list" id="log">
        {logs?.map((log, i) => (
          <li key={"log-" + i}>
            <span key={"log-span-p-" + i}>
              {i % 2 === 0 ? players[0].name : players[1].name}
              {` (${log.val}) selected (${log.row}, ${log.col})`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
