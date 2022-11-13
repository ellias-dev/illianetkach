import React from "react";
import {Article} from './article';
import { news } from "./news-data";

export const News = () => {
    const allNews = news.map(newss => <Article article={newss} id={newss} /> );

    
    return (
        <div className='sec sec-margin content'>
            <h2>NEWS</h2>
            <div className="container-fluid">
                <div className="row d-flex flex-row-reverse">
                    <div className="col-12 order-2 col-lg-10">
                        {allNews}
                    </div>
                    <div className="col-12 order-1 col-lg-2 sec">
                        <h4>Posts</h4>
                        <ul className="sec">
                            <li><a href='#battle'>{news[0].title}</a></li>
                            <li><a href='#surLeFil'>{news[1].title}</a></li>
                            <li><a href='#feteDeLaMusic'>{news[2].title}</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
           
            
            
            
        </div>
    )
}