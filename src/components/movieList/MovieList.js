import React from "react";
import FavMovie from "../favMovie/FavMovie";
import Movie from "../movie/Movie";
import './MovieList.css';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';

export default function MovieList(props) {

    const [favoriteMovies, setFavoriteMovies] = useState(props.data);



    const onDeleteMovieFromFavorite = (id)=>{
        
        setFavoriteMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));

    }

    return (
        <div className="movieList">
            <ToastContainer/>

            {props.isFavorite ?
                favoriteMovies.map(movie => (
                    <FavMovie key={movie.id} movieData={movie} onDeleteMovieFromFavorite={onDeleteMovieFromFavorite} />
                )) :
                props.data.map(movie => (
                    <Movie key={movie.id} movieData={movie} />
                ))
            }
        </div>
    );
}
