import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getData from "../../data/getData";
// import PropTypes from "prop-types";
import GameThumbnail from "./GameThumbnail";
import { baseURL, gamesEndpoint, tokenKey } from "../../config/config";
import Genres from "../../components/Genres";
import PaginationList from "../../components/PaginationList";
import scrollToTopFunc from "../../utility/scrollToTopFunc";

function GamesList() {
    const [searchParams, setSearchParams] = useSearchParams();

    const gameQuery = searchParams.get('search') || '';

    const gameURL = `${gamesEndpoint}${tokenKey}`

    const [gameList, setGameList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(baseURL)
            );
            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getDataGamesList() {
            try {
                const data = await getData(gameURL);

                setGameList(data.results);

            } catch (error) {
                console.error('Error fetching genres:', error.message);
            }
        }

        if (!gameList.length) {
            getDataGamesList();
        }

        scrollToTopFunc()

    }, [gameURL, gameList]);


    return (
        <section className="relative w-full min-h-screen px-2.5 py-[40px] lg:py-[100px] overflow-hidden duration-500">
            <div className="flex flex-row-reverse pb-5 my-10 px-10 heroUnderline">
                {/* <p className="text-white text-2xl uppercase titleEffect relative lg:pt-16 lg:pb-10 lg:px-12">filters:</p> */}
                {/* <Search setSearchParams={setSearchParams} gameQuery={gameQuery} /> */}
            </div>
            <div className="flex gap-5 lg:pl-12">
                <aside className="w-1/12">
                    <Genres setGameList={setGameList} gameList={gameList} />
                    {/* <Genres selectedGenre={selectedGenre} onGenreChange={handleGenreChange} /> */}
                </aside>
                <div className="box-border lg:pr-12 flex flex-wrap gap-5 justify-center +w-11/12">
                    {
                        gameList.map(
                            game => <GameThumbnail key={game.id} game={game} />
                        )
                    }
                </div>
            </div>
            <PaginationList setGameList={setGameList} gameURL={gameURL} />
        </section>
    );
}

export { GamesList as Component };

export default GamesList;
