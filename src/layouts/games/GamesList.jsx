import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { tokenKey, baseUrl, gamesEndpoint } from "../../config/config";

function GamesList() {
    const [gameList, setGameList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(`${baseUrl}${gamesEndpoint}${tokenKey}`)
            );
            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getDataGamesList() {
            const server = `${baseUrl}${gamesEndpoint}${tokenKey}`;
            const response = await fetch(server, {
                method: 'GET',
            });
            const gamesData = await response.json();

            window.localStorage.setItem(server, JSON.stringify(gamesData));

            setGameList(gamesData.results);
        }
        gameList.length || getDataGamesList();

    }, [gameList]);

    return (
        <section className="relative w-full min-h-screen px-[40px] py-[40px] lg:px-[100px] lg:py-[100px] overflow-hidden duration-500">
            <h2>Games</h2>
            <div className="box-border flex flex-wrap gap-10 justify-center items-center">
                {
                    gameList.map(
                        game => <GameCard key={game.id} game={game} />
                    )
                }
            </div>
        </section>
    );
}

export { GamesList as Component };

export default GamesList;
