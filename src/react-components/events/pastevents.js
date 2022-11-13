import React from "react";
import { pasteventsdb } from "./events-db";

export const PastEvents = () => {
    const pastEventsList = pasteventsdb.map(show => {
        return (
            <div className="row sec bor-bot">
            <div className='sec col-6 col-md-2'>{show.date}</div>
            <div className='sec col-6 col-md-5'>{show.venue}</div>
            <div className='sec col-12 col-md-5'>{show.description}</div>
        </div>
        )
        
    });
    return (
         pastEventsList
    )
}