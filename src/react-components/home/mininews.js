import React from "react";
import { Link } from "react-router-dom";


export const MiniNews = (props) => {
    const targ = `/news/#${props.article.id}`;
    return (
        <div className="margin-bottom sec">
            <span class='date'>{props.article.date}</span>
            <h4>{props.article.title}</h4>
            <p>{props.article.shortText}</p>

            <Link to={targ} alt='news'>Read More</Link>

            
        </div>
    )
}