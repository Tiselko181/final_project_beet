import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import getData from "../data/getData";
import { pageUrl } from "../config/config";

PaginationList.propTypes = {
    setGameList: PropTypes.func,
};

function PaginationList({ setGameList }) {
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const currentPageURL = `${pageUrl}${page}`;

    useEffect(() => {
        async function getDataGamesListByPage() {
            try {
                const data = await getData(currentPageURL);

                setGameList(data.results);

                console.log(data);
            } catch (error) {
                console.error('Error fetching games:', error.message);
            }
        }

        if (page !== currentPageURL) {
            getDataGamesListByPage();
            setCurrentPage(page);
        }


    }, [currentPageURL, page, currentPage, setGameList]);

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
