
import Movie from "../movie/Movie";
import './MovieList.css';



export default function MovieList(props){

   

    return (
      
        <div className="movieList">
    
        {props.data.map(movie=>

            <Movie key={movie.id} movieData = {movie}/>

                )}
        </div>
      

       
    );

}