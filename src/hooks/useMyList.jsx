import { useState } from 'react';

const addToFavKey = 'myFavList';

function useMyList() {
    const [myFavList, setMyFavList] = useState(
        () => {
            const data = JSON.parse(
                window.localStorage
                    .getItem(addToFavKey)
            );
            return data ? data : [];
        }
    );

    const myFavId = (() => {
        const gameValue = {};
        if (Array.isArray(myFavList) && myFavList.length) {
            for (const game of myFavList) {
                gameValue[game.id] = true;
            }
        }
        return gameValue;
    })();

    // console.log(myFavId);
    function addToMyFav(game) {
        if (game.id in myFavId) {
            //console.log(`ID ${film.id} є у списку улюблених`);
            const newMyFavList = myFavList.filter((item) => item.id !== game.id);
            window.localStorage.setItem(addToFavKey, JSON.stringify(newMyFavList));
            return setMyFavList(newMyFavList);
        } else {
            //console.log(`ID ${film.id} відсутній у списку улюблених`);

            setMyFavList(
                (currentValue) => {
                    const newMyFavList = [
                        ...currentValue,
                        game
                    ];
                    window.localStorage.setItem(addToFavKey, JSON.stringify(newMyFavList));
                    return newMyFavList;
                }
            )

        }
    }
    // console.log(myFavId);

    return ([myFavList, myFavId, addToMyFav]);
}

export default useMyList;
