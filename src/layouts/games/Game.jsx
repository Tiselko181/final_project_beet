import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tokenKey, baseUrl, gamesEndpoint } from "../../config/config";

function Game() {
    const params = useParams();

    const [game, setGame] = useState(
        () => {
            return JSON.parse(
                window.localStorage.getItem(`${baseUrl}${gamesEndpoint}/${params.id}${tokenKey}`)
            ) || {}
        }
    );

    useEffect(() => {
        async function getDataGame() {
            const server = `${baseUrl}${gamesEndpoint}/${params.id}${tokenKey}`;
            const response = await fetch(server, {
                method: 'GET',
            });
            const gameDataResponse = await response.json();

            window.localStorage.setItem(server, JSON.stringify(gameDataResponse));

            setGame(gameDataResponse.slug);
        }
        game.length || getDataGame();
    })

    return (
        <div className="relative w-full min-h-screen px-[100px] py-0 overflow-hidden after:absolute after:content-[''] after:w-full after:h-full after:bg-[#121212cd] after:inset-x-0 after:inset-y-0" >
            <div className="py-1.5 px-[100px] top-0 left-0 w-full h-screen flex justify-between items-center overflow-hidden pb-[100px]">
                <img src={game.background_image_additional} alt="Game Poster" className="absolute top-0 left-0 w-full h-screen object-center text-9xl" />
                <div>
                    <h4 className="text-[#ddd] text-l font-normal pl-2.5">{game.name}</h4>
                </div>
            </div>
        </div>
    );
}

export { Game as Component };

export default Game; 
