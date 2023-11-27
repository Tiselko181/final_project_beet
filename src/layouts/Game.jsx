import { useParams } from "react-router-dom";

function Game() {
    const params = useParams();

    return (
        <section className="relative w-full min-h-screen px-[100px] py-[100px] overflow-hidden duration-500">
            <h2>Game</h2>
            <p>{params.id}</p>
        </section>
    );
}

export { Game as Component };

export default Game; 
