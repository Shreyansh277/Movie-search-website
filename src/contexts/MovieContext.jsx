import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext(null);

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("useMovieContext must be used within a MovieProvider");
    }
    return context;
};

export const MovieProvider = ({ children }) => {  
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }, [favorites]);

    const addFavorite = (movie) => {
        setFavorites([...favorites, movie]);
    };

    const removeFavorite = (movieId) => {
        setFavorites(favorites.filter((fav) => fav.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((fav) => fav.id === movieId);
    };

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
