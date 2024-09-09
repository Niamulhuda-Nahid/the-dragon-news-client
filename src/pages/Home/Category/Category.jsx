import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {id ? <h2>This is category {categoryNews.length}</h2> : <h2 className='fs-5 fw-bold mb-3'>Dragon News Home</h2>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;