import React from 'react';
import './../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorite()
{
    const {favorites} = useMovieContext();

    if(favorites.length > 0)
    {
        return <div className='favorites'> 
            <h2>Your Favorites</h2>
            <div className='movies-grid'>
            {favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </div>
    }

    return     <div className='favorites-empty'>
        <h2>No Favorite Movie Yet</h2>
        <p>start adding movies to your favorites and they will apper here  </p>
    </div>
}


export default Favorite;