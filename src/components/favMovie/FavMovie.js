import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './FavMovie.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ModalFavMovie from '../ModalFavMovie/ModalFavMovie';

export default function FavMovie(props) {
    

    const [showModal, setShowModal] = useState(false); 




    const deleteMovie = (id) =>{

  

        let url = `${process.env.REACT_APP_serverURL}/deleteFavorite/${id}`;

        axios.delete(url).then(response=>{

            props.onDeleteMovieFromFavorite(id);
            toast.success('Movie deleted from favorites successfully! ', { autoClose: 2000 });
            
            

        }).catch(error=>{

            console.log('something went wrong', error);

        });


    }


    const openModalMovie = () => {

        setShowModal(true);
       
    };

    const closeModal = () => {
        setShowModal(false);
    };

    
    let imageSrc = `https://image.tmdb.org/t/p/w185${props.movieData.poster_path}`;

    return (
        <>
        
        

            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                    <Card.Title>{props.movieData.title || "No title"}</Card.Title>
                    

                    <div className='buttons-container'>
                    <a onClick={openModalMovie} className="btn btn-success">Update</a>
                    
                    <a onClick={()=>deleteMovie(props.movieData.id)} className="btn btn-danger">Delete</a>
                    </div>
                </Card.Body>
            </Card>
            {showModal && <ModalFavMovie movieData={props.movieData} onClose={closeModal} />}

      
            

        </>
    );
}
