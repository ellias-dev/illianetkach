import React from 'react';

export const Hero = () => {
    return (
        <div className="jumbotron jumbotron-fluid jumbo">
            {/* <img width='100%' src='/images/sliderhigh.jpg'></img>  */}

            <picture>
                <source media="(min-width: 768px)" srcset="./images/sliderhigh1200.jpg" width='100%'></source>
                <source media="(min-width: 1200px)" srcset="./images/sliderhigh.jpg" width='100%'></source>
                <img src="./images/sliderhigh768.jpg" width='100%'></img>
            </picture>


            
    
    

        </div>
    )
    
}