import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import axios from "axios";



export default function FavList(){ 
    const [favMovies, setFavMovies] = useState([]);
    const [loading, setLoading] = useState(true); 

    const getFavoriteMovies = () => {
        let url = 'http://localhost:3001/getFavorite';
        axios.get(url)
            .then(response => {
                setFavMovies(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.log(error);
                setLoading(false); 
            });
    }

    useEffect(() => {
        getFavoriteMovies();
    }, []);

    return (
     
            <>
            {loading ? (
              
              <h1>loading....</h1>
           
             ) : (
                 <MovieList data={favMovies} />
             )}</>
       
    );

}