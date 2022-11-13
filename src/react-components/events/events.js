import React from "react";
import { PastEvents } from "./pastevents";

export const Events = () => {
    return (
        <div className="content sec sec-margin">
            <h2>Events</h2>
            <div className="container-fluid sec">
                <h3>Upcoming events</h3>
                <p>No events... yet</p>
            </div>
            <div className='container-fluid'>
                <h3>Past events</h3>
                <PastEvents />

                
            </div>
        </div>
    )
}