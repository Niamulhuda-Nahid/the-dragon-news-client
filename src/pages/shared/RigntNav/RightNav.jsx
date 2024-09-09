import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { GrGoogle } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bgImg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='fw-bold fs-4'>Login With</h2>
            <div>
                <Button className='px-5 mb-2' variant="outline-info"><GrGoogle /> Login with google</Button>
                <Button className='px-5' variant="outline-info"><FaGithub /> Login with github</Button>
            </div>
            <div className='mt-4'>
                <h3 className='fs-5 fw-semibold mb-3'>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item className='fw-medium '><FaFacebookF className='text-primary'/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='fw-medium '><FaTwitter className='text-info'/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='fw-medium '> <FaInstagram className='text-danger'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img src={bgImg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-center text-light'>
                    <h2 className='fw-bold'>Create an Amazing Newspaper</h2>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='rounded-0 fs-5 fw-semibold px-4' variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;