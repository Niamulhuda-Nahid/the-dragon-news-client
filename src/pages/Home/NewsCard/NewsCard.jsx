import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { _id, title, author, image_url, details, total_view, rating } = news;
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} className='' src={author.img} roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p className='mb-0 fw-bold fs-5'>{author.name}</p>
                    <p className='text-secondary fs-6'>{moment(author.published_date).format('YYYY-MM-D')}</p>
                </div>
                <div className='fs-4'>
                    <FaRegBookmark className='me-2' />
                    <IoShareSocialOutline />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fs-4 fw-bold mb-3'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='fs-6 fw-normal text-secondary mt-3'>
                    {details.length < 250 ? details :
                        <>{details.slice(0, 250)}...
                            <Link className='text-decoration-none fw-bold text-warning' to={`/news/${_id}`}>Read More</Link>
                        </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex '>
                    <Rating
                    className='text-warning'
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    />
                    <p className='ms-2'>{rating.number}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='me-2'><FaEye /></p>
                    <p>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;