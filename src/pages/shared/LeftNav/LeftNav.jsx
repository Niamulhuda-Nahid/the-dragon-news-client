import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { FiTv } from "react-icons/fi";
import moment from 'moment';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div>
            <h2 className='fs-4 fw-bold'>All Caterogy</h2>
            <div className='mt-3'>
                {
                    categories.map(category => <p
                        className=' px-4 py-3 bg-body-secondary rounded'
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none fs-5 fw-medium text-secondary '>{category.name}</Link>
                    </p>)
                }
            </div>
            <div>
                <CardGroup className='mt-3 gap-3 d-flex flex-column'>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={first} />
                        <Card.Body >
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <div className='d-flex align-items-center text-secondary fw-semibold'>
                                <FiTv className='fs-4 fw-bold' />
                                <p className='mb-0 ms-3'>{moment().format('MMM D, YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <div className='d-flex align-items-center text-secondary fw-semibold'>
                                <FiTv className='fs-4 fw-bold' />
                                <p className='mb-0 ms-3'>{moment().format('MMM D, YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <div className='d-flex align-items-center text-secondary fw-semibold'>
                                <FiTv className='fs-4 fw-bold' />
                                <p className='mb-0 ms-3'>{moment().format('MMM D, YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </div>
        </div>
    );
};

export default LeftNav;