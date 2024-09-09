import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import profile from '../../../assets/user.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <Container>
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link to='/' className='text-decoration-none text-dark'>Home</Link>
                            <Link className='text-decoration-none text-dark' href="#link">About</Link>
                            <Link className='text-decoration-none text-dark' href="#link">Career</Link>
                        </Nav>
                        {user && <img style={{ height: '41px' }} src={profile} alt="" />}
                        {user ?
                            <Button onClick={handleLogout} className='rounded-0 px-4 ms-3' variant="dark">Logout</Button> :
                            <Link to='/login'>
                                <Button className='rounded-0 px-4 ms-3' variant="dark">Login</Button>
                            </Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;