import React from "react";
import { Hero } from './hero';
import { LatestNews } from './latestnews';
import { Connect } from "./connect";
import { Listen } from "./listen";
import { RecentVideo } from "./recentvideo";
import { Press } from "./press";

export const Home = () => {
    return (
        <div>
            <Hero />
            <Connect />
            {/* <Listen /> */}
            <LatestNews />
            {/* <RecentVideo /> */}
            <Press />
            
        </div>
            

        
    )
}