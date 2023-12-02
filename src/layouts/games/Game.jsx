import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tokenKey, baseUrl, gamesEndpoint } from "../../config/config";
import GoBackDtn from "../../components/btns/GoBackDtn";
import GameGenres from "../../components/game/GameGenres";
import GameDescription from "../../components/game/GameDescription";
import GameRating from "../../components/game/GameRating";

function Game() {
    const params = useParams();

    const [game, setGame] = useState(
        () => {
            return JSON.parse(
                window.localStorage.getItem(`${baseUrl}${gamesEndpoint}/${params.id}${tokenKey}`)
            ) || {};
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

            setGame(gameDataResponse);
        }
        game.length || getDataGame();
    }, [game.length, params.id])

    return (
        <div className="relative w-full min-h-screen lg:px-[100px] py-0 overflow-hidden after:absolute after:content-[''] after:w-full after:h-full after:bg-[#121212cd] after:inset-x-0 after:inset-y-0" >
            <GoBackDtn />
            <div className="py-5 px-[100px] top-0 left-0 w-full h-screen flex justify-between items-center overflow-hidden pb-[100px]">
                <img src={game.background_image_additional} alt="Game Poster" className="absolute top-0 left-0 w-full h-screen object-cover object-center text-9xl" />
                <div className="relative lg:flex lg:justify-center  bg-[#00000018] rounded backdrop-blur-[20px] shadow-[0_0_30px] shadow-[#ffffff6b] z-50 lg:px-20 lg:py-20 lg:mt-32">
                    <img src={game.background_image} alt="Title Image" className="relative z-50 w-[270px] h-[400px] object-cover mx-5" />
                    <div className="relative text-[#ddd] text-l font-normal px-5 z-50">
                        <GameRating game={game} />
                        <h2 className="relative text-[#ddd] font-normal pl-2.5 z-50 text-3xl tracking-wide py-3">
                            {game.name}
                        </h2>
                        {
                            game && game.genres && game.genres.map(genre => <GameGenres key={genre.id} genre={genre} />)
                        }
                        <div className="flex flex-col pt-5">
                            <GameDescription game={game} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Game as Component };

export default Game; 
