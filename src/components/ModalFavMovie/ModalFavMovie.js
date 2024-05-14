import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ModalFavMovie.css';


export default function ModalFavMovie(props) {
    const [comment, setComment] = useState(props.movieData.comment);

    const handleClose = () => {
        props.onClose();
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (id) => {
        let url = `${process.env.REACT_APP_serverURL}/updatecomment/${id}`;

        console.log('the id is: ', id);

        let data = {
            id : props.movieData.id,
            title: props.movieData.title,
            release_date: props.movieData.release_date,
            poster_path: props.movieData.poster_path,
            overview: props.movieData.overview,
            comment: comment || "No comments"
        };

        axios.put(url, data).then(response => {
            
            console.log('Data was updated successfully!');
            toast.success('Your comment updated successfully! ', { autoClose: 2000 });
            setComment('');
        
        }).catch(error => {
            
            console.log(error);
            alert('Something went wrong, please try again later');
            
        });

       

    };

    return (
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <img src={`https://image.tmdb.org/t/p/w185${props.movieData.poster_path}`} alt={props.movieData.title} />
                    
                    <Form.Group controlId="comment" className='form-group'>
                        <Form.Label>Change your Comment:</Form.Label>
                        <Form.Control
                            type="text"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Enter your comment..."
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> handleSubmit(props.movieData.id)}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}
