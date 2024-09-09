import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';
import { FiTv } from "react-icons/fi";
import moment from 'moment';

const EditorsInsight = () => {
    return (
        <div className='mt-4'>
            <h2 className='fs-5 fw-bold'>Editors Insight</h2>
            <CardGroup className='mt-3 gap-3'>
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
    );
};

export default EditorsInsight;