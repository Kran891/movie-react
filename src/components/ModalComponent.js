import React, { useState,props } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Genre from '../services/Genre';

const ModalComponent = (props) => {
    const [show, setShow] = useState(false);
    const [genre, setGenre] = useState({
        name: ""
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleChange(event) {
        const { name, value } = event.target
        setGenre(pValues => {
            return {
                ...pValues,
                [name]: value
            }
        })

    }
    function handleGenreSubmit(event) {
        event.preventDefault();
        
        props.onGenreFormSubmit(genre);
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <i className="fa-solid fa-plus fa-beat fa-2xs"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Genre</Modal.Title>
                </Modal.Header>
                
                    <Modal.Body>
                        <Form.Group className="col-md-12">
                            <Form.Label className="labels">Name</Form.Label>
                            <Form.Control type="text" className="form-control" name="name" placeholder="name" value={genre.name} onChange={handleChange} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='button' onClick={handleGenreSubmit} >
                            Save Changes
                        </Button>
                    </Modal.Footer>
             
            </Modal>
        </>
    );
};

export default ModalComponent;
