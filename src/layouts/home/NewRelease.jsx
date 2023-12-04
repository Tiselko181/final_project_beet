import { useEffect, useState } from 'react';
import GameThumbnail from "../../layouts/games/GameThumbnail";
import { baseURL } from '../../config/config';
import Btn from '../../components/btns/Btn';

function NewRelease() {
    const [games, setGames] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const fetchGames = () => {
        fetch(`${baseURL}&dates=2023-01-01,2023-12-01`)
            .then(resp => resp.json())
            .then(({ results }) => setGames(results))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchGames()
    }, [])

    const truncatedGames = games.map(game => ({
        ...game,
    }));

    const displayedGames = showMore ? truncatedGames : truncatedGames.slice(0, 4);

    return (
        <section className='lmd:py-16 sm:py-10 py-5 px-10 w-full'>
            <h2 className='md:px-20 px-6 relative md:text-2xl uppercase tracking-wide titleEffect flex pb-11 mb-5 pt-2.5 z-50'>Latest Release:</h2>
            <div className='flex flex-col items-center gap-5'>
                <div className='flex flex-wrap px-[40px] justify-center'>
                    {displayedGames.map((game) => (
                        <GameThumbnail key={game.id} game={game} />
                    ))}
                </div>
                {games.length > 4 && (
                    <button
                        className="sm:w-[138px] sm:mx-[15px] py-[5px] px-4 no-underline md:text-lg text-sm font-normal uppercase bg-[#ff3700] text-white duration-300 !cursor-pointer border-0 rounded hover:!text-[#ff3700] hover:!bg-white self-center"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                )}
            </div>
        </section>
    );
}

export default NewRelease;
