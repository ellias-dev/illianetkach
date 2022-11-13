import React from "react";

export const Article = (props) => {
    return (
        <div className="sec">
            <span className="date">{props.article.date}</span>
            <h4 id={props.article.id}>{props.article.title}</h4>
            <p>{props.article.content}</p>
            
        </div>
    )
}