import React, { Component, useEffect, useState } from 'react';
import UserApi from "../api/UserApi";
import { Button, Form } from 'react-bootstrap';
import formService from "../api/formService";

const LoginForm = ({history}) => {

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const [error, setError] = useState('');

    const handleChange = (event) => formService.handleChange(event, user, setUser);

    const handleSubmit = (event) => {
        event.preventDefault();

        UserApi.loginCheck(user).then((token) => {
            setError("");
            // history.push('/')
        })
    }

    return (
        <div className="body">
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={user.email}
                        onChange={handleChange}  type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">On va la vendre a facebook, mais chut, la cnil doit pas savoir</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={user.password}
                        onChange={handleChange} type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm;