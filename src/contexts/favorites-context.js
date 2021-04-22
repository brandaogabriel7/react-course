import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    total: 0,
    addFavorite: () => { },
    removeFavorite: () => { },
    isFavorite: () => { }
});

const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (newFavorite) => {
        setFavorites(prevFavorites => prevFavorites.concat(newFavorite));
    };

    const removeFavorite = (meetupId) => {
        setFavorites(prevFavorites => prevFavorites.filter(meetup => meetup.id !== meetupId));
    };

    const isFavorite = (meetupId) => {
        return favorites.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favorites: favorites,
        total: favorites.length,
        addFavorite,
        removeFavorite,
        isFavorite
    };

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesContext as default, FavoritesContextProvider };
