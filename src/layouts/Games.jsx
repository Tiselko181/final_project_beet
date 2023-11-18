import { Link } from "react-router-dom";

function Games() {
    return (
        <>
            <h2>Games</h2>
            <Link to='/games/123'></Link>
        </>
    );
}

export { Games as Component };

export default Games;
