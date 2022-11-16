import React from 'react';

export const Hero = () => {
    return (
        <div className="jumbotron jumbotron-fluid jumbo">
            {/* <img width='100%' src='/images/sliderhigh.webp'></img>  */}


            <picture>
    <source srcset="/images/sliderhigh.webp" width='100%'/>
    <img src="/images/sliderhigh.jpg" alt="" width='100%' />
</picture>
        </div>
    )
    
}