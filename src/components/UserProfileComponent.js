import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";
import User from '../services/User';

const UserProfileComponent = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: ""
    })
    useEffect(() => {

        return async () => {

            await User.getUser(setUser);
        };
    }, []);
    function handleChange(event) {
        const { name, value } = event.target
        setUser(pValues => {
            return {
                ...pValues,
                [name]: value
            }
        })

    }
    function handleSubmit(event) {
        event.preventDefault();
        User.updateUser(user);
    }
    return (
        <div className="container rounded bg-white mt-5 mb-5 profileStyling">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                        <span className="font-weight-bold">{user.name}</span>
                        <span className="profileEmail">{user.email}</span>
                    </div>
                </div>
                <div className="col-md-9 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <Form className="row mt-2" onSubmit={handleSubmit}>
                            <Form.Group className="col-md-12">
                                <Form.Label className="labels">Name</Form.Label>
                                <Form.Control type="text" className="form-control" name="name" placeholder="name" value={user.name} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="col-md-12">
                                <Form.Label className="labels">Email</Form.Label>
                                <Form.Control type="text" className="form-control" name="email" placeholder="email" value={user.email} onChange={handleChange} />
                            </Form.Group>
                            <div className="mt-5 text-center">
                                <Button className="btn btn-primary profile-button" type="submit">
                                    Save Profile
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileComponent;
