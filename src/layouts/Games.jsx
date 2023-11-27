import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";



function Games() {
    const [gameList, setGameList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem('https://api.rawg.io/api/games?key=1f6c416ba1884dcc875ae25be6c7b04f')
            );

            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getDataGames() {
            const server = 'https://api.rawg.io/api/games?key=1f6c416ba1884dcc875ae25be6c7b04f';
            const response = await fetch(server, {
                method: 'GET',
            });
            const gamesData = await response.json();

            window.localStorage.setItem(server, JSON.stringify(gamesData));

            setGameList(gamesData.results);
        }

        if (gameList.length === 0) {
            getDataGames();
        }

    }, [gameList]);
    console.log(gameList);
    return (
        <section className="relative w-full min-h-screen px-[100px] py-[100px] overflow-hidden duration-500">
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

export { Games as Component };

export default Games;
