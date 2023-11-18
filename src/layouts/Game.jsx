import { useParams } from "react-router-dom";

function Game() {
    const params = useParams();

    return (
        <>
            <h2>Game</h2>
            <p>{params.id}</p>
        </>
    );
}

export { Game as Component };

export default Game;
