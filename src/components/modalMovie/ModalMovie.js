import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ModalMovie(props) {
    const [comment, setComment] = useState('');

    const handleClose = () => {
        props.onClose();
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        let url = 'http://localhost:3001/addMovie';

        let data = {
            title: props.movieData.title,
            release_date: props.movieData.release_date,
            poster_path: props.movieData.poster_path,
            overview: props.movieData.overview,
            comment: comment || "No comments"
        };

        axios.post(url, data).then(response => {
            
            console.log('Data was added successfully!');
        
        }).catch(error => {
            
            console.log(error);
            alert('Something went wrong, please try again later');
            
        });

        //alert(`you comment: [${comment}] was saved successfully ^_^`)
        toast.success('Movie added to favorites successfully! ', { autoClose: 2000 });
        setComment('');

    };

    return (
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`https://image.tmdb.org/t/p/w185${props.movieData.poster_path}`} alt={props.movieData.title} />
                    
                    <Form.Group controlId="comment">
                        <Form.Label>Add a Comment</Form.Label>
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
                    <Button variant="primary" onClick={handleSubmit}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}
