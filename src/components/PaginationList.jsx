import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

PaginationList.propTypes = {
    gameQuery: PropTypes.string,
    setGameList: PropTypes.func,
    allGamesURL: PropTypes.string,
};

function PaginationList({ gameQuery, setGameList, allGamesURL }) {
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const currentPageURL = `${allGamesURL}&page=${page}`;

    useEffect(() => {
        async function getDataGamesListByPage() {
            try {
                const response = await fetch(currentPageURL, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch games: ${response.status}`);
                }

                const gamesData = await response.json();

                setGameList(gamesData.results);

            } catch (error) {
                console.error('Error fetching games:', error.message);
            }
        }

        if (gameQuery && page !== currentPageURL) {
            getDataGamesListByPage();
            setCurrentPage(page);
        }

    }, [currentPageURL, gameQuery, page, currentPage, setGameList]);

    return (
        <Pagination count={800} shape="rounded" className="absolute left-[43%] my-7" sx={{
            '.MuiButtonBase-root': {
                color: 'white',
                backgroundColor: '#191919',
            },
            '.MuiButtonBase-root:hover': {
                color: 'white',
                backgroundColor: '#ff3700',
            },
            '.Mui-selected': {
                backgroundColor: '#ff3700',
                pointerEvents: 'none',
            },
            '.Mui-selected:hover': {
                backgroundColor: '#ff3700',
            },
        }} onChange={(e, newPage) => {
            setPage(newPage);
        }} />
    );
}

export default PaginationList;
