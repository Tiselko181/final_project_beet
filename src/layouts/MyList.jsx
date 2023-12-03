import { useState, useEffect } from 'react';
import GameThumbnail from '../layouts/games/GameThumbnail';
import useMyList from '../hooks/useMyList';

function MyList() {
    const [myFavList, myFavId, addToMyFav] = useMyList();
    const [listChanged, setListChanged] = useState(false);

    useEffect(() => {
        setListChanged(true);
    }, [myFavList]);

    return (
        <main>
            <h1>My games</h1>
            {
                listChanged ? (
                    myFavList.length ? <GameThumbnail gameList={myFavList} addToMyFav={addToMyFav} myFavId={myFavId} /> : <p>Not in My List</p>
                ) : null
            }
        </main>
    );
}

export { MyList as Component };

export default MyList;
