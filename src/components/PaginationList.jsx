import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';

PaginationList.propTypes = {
    totalPages: PropTypes.number,
    setPage: PropTypes.func
};

function PaginationList({ setPage }) {
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
