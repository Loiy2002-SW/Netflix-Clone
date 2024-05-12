import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Movie.css';
import ModalMovie from "../modalMovie/ModalMovie";

export default function Movie(props) {
    

    const [showFullOverview, setShowFullOverview] = useState(false);
    const [showModal, setShowModal] = useState(false); 

    const onChangeOverview = () => {
        setShowFullOverview(!showFullOverview);
    };

    const renderOverview = () => {
        if (showFullOverview) {
            return props.movieData.overview;
        } else {
            //const words = props.movieData.overview.split(' ');
            //const truncatedOverview = words.slice(0, 15).join(' ');
            return ` `;
        }
    };

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
                    <Card.Text>
                        Release Year: {props.movieData.release_date|| "No realse date"}
                    </Card.Text>
                    <Card.Text>
                        Overview: {renderOverview()}
                        <a onClick={onChangeOverview} className="showMoreLess"> {showFullOverview ? 'Hide' : 'Show '}</a>
                    </Card.Text>

                    <a onClick={openModalMovie} className="btn btn-primary">Add to favorites</a>
                </Card.Body>
            </Card>
            {showModal && <ModalMovie movieData={props.movieData} onClose={closeModal} />}
            

        </>
    );
}
