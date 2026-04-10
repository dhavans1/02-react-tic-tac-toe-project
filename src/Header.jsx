import ticTacToeImg from './assets/tic-tac-toe.png';

export default function Header() {
    return (
        <header>
            <img src={ticTacToeImg} alt="Tic-Tac-Toe image"/>
            <h1>React Tic-Tac-Toe</h1>
        </header>
    );
}