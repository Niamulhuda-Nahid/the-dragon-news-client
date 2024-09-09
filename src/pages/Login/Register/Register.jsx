import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                navigate('/category/0')
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <Container style={{ width: '50%' }} className='my-3'>

            <Form onSubmit={handleRegister} className=' w-75 mx-auto  text-bg-light p-5'>
                <h3 className='fs-4 fw-bold text-center mb-3 text-secondary'>Register your account</h3>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fs-6 fw-semibold'>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label className='fs-6 fw-semibold'>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-6 fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-6 fw-semibold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAccepted(!accepted)} type="checkbox" name='accept' label="Accept Term & Conditions" />
                </Form.Group>

                <div className="d-grid mt-3">
                    {accepted ?
                        <Button className='bg-dark btn btn-primary fs-6 fw-semibold' variant="primary" type="submit">
                            Register
                        </Button>
                        :
                        <Button className='bg-dark btn btn-primary fs-6 fw-semibold' variant="primary" type="submit" disabled>
                            Register
                        </Button>}
                </div>

                <div className='text-center mt-2'>
                    <h2 className='badge text-secondary'>Already Have An Account ? <Link to='/login' className='text-danger text-decoration-none'>Login</Link></h2>
                </div>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Register;