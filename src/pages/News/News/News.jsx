import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, category_id } = news;
    return (
        <div>
            <h3 className='fs-5 fw-bold'>Dragon News</h3>
            <Card>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fs-4 fw-bold w-75 mb-3'>{title}</Card.Title>
                    <Card.Text className='text-secondary fs-6 mb-4'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button className='rounded-0' variant="danger"><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;