import React from "react";
import { Hero } from './hero';
import { LatestNews } from './latestnews';
import { Connect } from "./connect";

export const Home = () => {
    return (
        <div>
            <Hero />
            <Connect />
            <LatestNews />
        </div>
            

        
    )
}