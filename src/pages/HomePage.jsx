import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState,useEffect } from 'react'
import './../css/Home.css'
import { getMovies, searchMovies } from '../service/api'

function Home() {

    const [searchQuery, setSearchQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => { 
    const LoadMovies = async ()=>
    {
        try{
            const movies = await getMovies();
            setMovies(movies);
            // console.log(movies);
            setError(null);
        }catch(err)
        {
            setError("failed t load movies");
            console.log(err);
        }
        finally{
                setLoading(false);
        }


    }    
    LoadMovies();
    
    },[]);


    const handleSearch = async (e) => {
        e.preventDefault( )
        if(!searchQuery.trim()){
            return;
        }
        if(loading)return;
        setLoading(true);
        try{
            const result = await searchMovies(searchQuery.trim());
            setMovies(result);
            setError(null);
        }
        catch(err){
            setError('failed to load movies');
            console.log(err);
        }
        finally{setLoading(false)}
        setSearchQuery('') 
    }
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" placeholder="search for Movies..."  className='search-input' value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/> 
                <button type="submit" className='search-button'>Search Button</button>
            </form>

        {
            error && <div className='error-message'>{error}</div>
        }

            {loading ? (<div className='loading'>Loading...</div> ): (<div className='movies-grid'>
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie} />)}
            </div>)}
            
        </div>
    )
}

export default Home