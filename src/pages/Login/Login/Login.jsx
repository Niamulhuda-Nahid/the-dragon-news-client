import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/category/0'

  const handleSignIn = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      navigate(from, {replace: true});
    })
    .catch(error => {
      setError(error.message)
    })
  }

  return (
    <Container style={{ width: '50%' }} className='mt-3'>

      <Form onSubmit={handleSignIn} className=' w-75 mx-auto  text-bg-light p-5'>
        <h3 className='fs-4 fw-bold text-center mb-3 text-secondary'>Login your account</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fs-6 fw-semibold'>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fs-6 fw-semibold'>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Enter your Password" required />
        </Form.Group>

        <div className="d-grid mt-3">
          <Button className='bg-dark btn btn-primary fs-6 fw-semibold' variant="primary" type="submit">
            Login
          </Button>
        </div>

        <div className='text-center mt-2'>
          <h2 className='badge text-secondary'>Dont’t Have An Account ? <Link to='/register' className='text-danger text-decoration-none'>Register</Link></h2>
        </div>

        <Form.Text className="text-danger">
          {error}
        </Form.Text>

      </Form>
    </Container>
  );
};

export default Login;