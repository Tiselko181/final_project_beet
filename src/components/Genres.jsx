import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { URL } from "../data/getData";
import { tokenKey, genresEndpoint } from "../config/config";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

Genres.propTypes = {
    setGameList: PropTypes.func,
    gameList: PropTypes.array
};

function Genres({ setGameList, gameList }) {
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ left: open });
    };

    const [genresList, setGenresList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage.getItem(`${URL}${genresEndpoint}${tokenKey}`)
            );
            return data ? data.results : [];
        }
    );

    useEffect(() => {
        async function getGenresList() {
            try {
                const server = `${URL}${genresEndpoint}${tokenKey}`;
                const response = await fetch(server, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch genres: ${response.status}`);
                }

                const genresData = await response.json();

                window.localStorage.setItem(server, JSON.stringify(genresData));

                setGenresList(genresData.results);
            } catch (error) {
                console.error('Error fetching genres:', error.message);
            }
        }

        if (genresList.length === 0) {
            getGenresList();
        }

    }, [genresList]);

    const handleGenresFilter = (selectedGenre) => {
        if (selectedGenre === 'All') {
            setGameList(gameList);
        } else {
            const filteredGamesByGenre = gameList.filter(game => game.genres.some(genre => genre.name === selectedGenre));
            setGameList(filteredGamesByGenre);
        }
    }

    const liStyle = "mb-2.5 py-2.5 px-6 text-white text-center text-sm uppercase rounded bg-[#191919] cursor-pointer hover:bg-[#ff3700]";

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={
                            <ul className="pt-0 pb-2.5">
                                <li className={`${liStyle} activeLi`} onClick={() => handleGenresFilter('All')}>All</li>
                                {genresList.map((genre, index) => (
                                    <li key={index} onClick={() => { handleGenresFilter(genre.name) }} className={`${liStyle}`}>{genre.name}</li>
                                ))}
                            </ul >
                        } />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div className="absolute top-[125px]">
            <Button onClick={toggleDrawer(true)}>Open Genres</Button>
            <Drawer
                anchor="left"
                open={state.left}
                onClose={toggleDrawer(false)}
            >
                {list}
            </Drawer>
        </div >
    );
}

export default Genres;
