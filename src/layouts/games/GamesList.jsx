import { useState, useEffect } from "react";
import GameThumbnail from "./GameThumbnail";
import { tokenKey, baseUrl, gamesEndpoint } from "../../config/config";
import Genres from "../../components/Genres";
import PaginationList from "../../components/PaginationList";
import scrollToTopFunc from "../../components/utility/scrollTo";
import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";

function GamesList() {
    const [searchParams, setSearchParams] = useSearchParams();

    const gameQuery = searchParams.get('search') || '';

    const allGamesURL = `${baseUrl}${gamesEndpoint}${tokenKey}`;

    const [gameList, setGameList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(allGamesURL)
            );
            return data ? data.results : [];
        }
    );
    // console.log(gameList)
    useEffect(() => {
        async function getDataGamesList() {
            try {
                const response = await fetch(allGamesURL, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch games: ${response.status}`);
                }

                const gamesData = await response.json();

                window.localStorage.setItem(allGamesURL, JSON.stringify(gamesData));

                setGameList(gamesData.results);

            } catch (error) {
                console.error('Error fetching genres:', error.message);
            }
        }

        if (!gameList.length) {
            getDataGamesList();
        }

        scrollToTopFunc()

    }, [allGamesURL, gameList]);

    return (
        <section className="relative w-full min-h-screen px-2.5 py-[40px] lg:py-[100px] overflow-hidden duration-500">
            <div className="flex flex-row-reverse pb-5 my-10 px-10 heroUnderline">
                {/* <p className="text-white text-2xl uppercase titleEffect relative lg:pt-16 lg:pb-10 lg:px-12">filters:</p> */}
                <Search setSearchParams={setSearchParams} gameQuery={gameQuery} />
            </div>
            <div className="flex gap-5 lg:pl-12">
                <aside className="w-1/12">
                    <Genres gameList={gameList} setGameList={setGameList} />
                </aside>
                <div className="box-border lg:pr-12 flex flex-wrap gap-5 justify-center items-center w-11/12">
                    {
                        gameList.filter(game => game.name.toLowerCase().includes(gameQuery.toLowerCase()))
                            .map(
                                game => <GameThumbnail key={game.id} game={game} />
                            )
                    }
                </div>
            </div>
            <PaginationList setGameList={setGameList} gameQuery={gameQuery} allGamesURL={allGamesURL} />
        </section>
    );
}

export { GamesList as Component };

export default GamesList;
