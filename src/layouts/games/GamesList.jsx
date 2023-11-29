import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import GameCard from "./GameCard";
import { tokenKey, baseUrl, gamesEndpoint } from "../../config/config";
import Genres from "../../components/Genres";
import PaginationList from "../../components/PaginationList";

function GamesList() {
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const URL = `${baseUrl}${gamesEndpoint}${tokenKey}&page=${page}`;

    const [gameList, setGameList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(URL)
            );
            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getDataGamesList() {
            try {
                const response = await fetch(URL, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch games: ${response.status}`);
                }

                const gamesData = await response.json();

                window.localStorage.setItem(URL, JSON.stringify(gamesData));

                setGameList(gamesData.results);

                console.log(gamesData.count)
            } catch (error) {
                console.error('Error fetching genres:', error.message);
            }
        }

        if (!gameList.length || page !== currentPage) {
            getDataGamesList();
            setCurrentPage(page);
        }

    }, [URL, gameList, page, currentPage]);

    return (
        <section className="relative w-full min-h-screen px-2.5 py-[40px] lg:py-[100px] overflow-hidden duration-500">
            <div className="text-white text-2xl uppercase titleEffect relative lg:pt-16 lg:pb-10 lg:px-12">filters:</div>
            <div className="flex gap-5 lg:pl-12">
                <aside className="w-1/12">
                    <Genres />
                    {/* <Genres selectedGenre={selectedGenre} onGenreChange={handleGenreChange} /> */}
                </aside>
                <div className="box-border lg:pr-12 flex flex-wrap gap-5 justify-center items-center w-11/12">
                    {
                        gameList.map(
                            game => <GameCard key={game.id} game={game} />
                        )
                    }
                </div>
            </div>
            <PaginationList setPage={setPage} />
        </section>
    );
}

export { GamesList as Component };

export default GamesList;
