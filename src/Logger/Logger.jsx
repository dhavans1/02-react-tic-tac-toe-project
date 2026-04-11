import './Logger.css';

export default function Logger({logs, players}) {
    return(
        <div className='logger-container'>
            <p>Game play log</p>
            <ul className='logger-list' id="log">
                <li>
                    <span>Player</span>
                    <span>Row</span>
                    <span>Column</span>
                    <span>Symbol</span>
                </li>
                {logs?.map((log, i) => (
                        <li key={'log-' + i}>
                            <span key={'log-span-p-' + i}>{
                                i % 2 === 0 ? players[0] : players[1]
                            }</span>

                            {
                                log.map((v,j) => <span key={'log-span-' + i + '-' + j}>{ v }</span>)
                            }
                        </li>
                ))}
            </ul>
        </div>
    );
}