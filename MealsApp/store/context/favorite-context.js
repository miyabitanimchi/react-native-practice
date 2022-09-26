import { createContext, useState } from "react";

const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    };

    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };
    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContextProvider;
