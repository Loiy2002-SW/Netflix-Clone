import { useEffect, useState } from "react";
import MovieList from "../movieList/MovieList";
import axios from "axios";
import './FavoriteMovies.css';



export default function FavList(){ 
    const [favMovies, setFavMovies] = useState([]);
    const [loading, setLoading] = useState(true); 

    const getFavoriteMovies = () => {
        let url = `${process.env.REACT_APP_serverURL}/getFavorite`;
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
              
              <h1 className="h1-message" >loading....</h1>
           
             ) : (
                favMovies.length?
                 (<MovieList isFavorite = {true} data={favMovies} />) : (<h1 className="h1-message">Favorite list is empty😢, try adding some...😎</h1>)
             )}</>
       
    );

}