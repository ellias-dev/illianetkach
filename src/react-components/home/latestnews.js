import React from 'react';
import { Link } from 'react-router-dom';
import { battle } from '../news/news-data';
import { news } from '../news/news-data';
import { MiniNews } from './mininews';

export const LatestNews = () => {
    const listNews = news.map(newss => <MiniNews article={newss} /> );
    return (
        <div className='sec content'>
            <h3>latest news</h3>
            
            {listNews}
            
            
            
        </div>
    )
}