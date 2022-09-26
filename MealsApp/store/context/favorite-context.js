import { createContext } from "react";

const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
    return <FavoriteContext.Provider>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
