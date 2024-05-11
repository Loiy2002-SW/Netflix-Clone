import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from '../movieList/MovieList';
import './Home.css';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); 

    const getTrendingMovies = () => {
        let url = 'http://localhost:3001/trending';
        axios.get(url)
            .then(response => {
                setMovies(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.log(error);
                setLoading(false); 
            });
    }

    useEffect(() => {
        getTrendingMovies();
    }, []);

    return (
        <>
            {loading ? (
              
             <h1>loading....</h1>
          
            ) : (
                <MovieList data={movies} />
            )}
        </>
    );
}




