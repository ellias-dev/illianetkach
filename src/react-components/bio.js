import React from "react";

export const Bio = () => {
    return(
        <div className="sec sec-margin content">
            <h2>Bio</h2>
            <div className="sec">
                {/* <img src='./images/photos/bio.jpg' className="img-fluid margin-bottom"></img> */}

                <picture>
                    <source media="(min-width: 992px)" srcset="./images/photos/bio.jpg" className="img-fluid margin-bottom" alt='Illia Netkach'></source>
                    <source media="(min-width: 576px)" srcset="./images/photos/bio992.jpg" className="img-fluid margin-bottom" alt='Illia Netkach'></source>
                    <img src="./images/photos/bio576.jpg" className="img-fluid margin-bottom" alt='Illia Netkach'></img>
                </picture>
            <p> Hi! I am Illia Netkach, a professional violinist from Ukraine.

I graduated from Kharkov State College of Music (2006) with a formal classical education. However, I was keen to acquire improvisation skills – jazz in particular – and soon started attending jazz jams and playing gigs, both solo and as a session musician.</p>

 <p>In 2009, inspired by an interview of Steve Vai in Guitar World, about his first solo release “Flex-Able”, as well as by the music of Stephane Grappelli, Regina Carter, Jean-Luc Ponty, Eric Truffaz and others, I began working on my own original music.

My debut single, “Lugsana”, was released in December 2012.</p>
<p>Since 2013, I have been working in the Middle East as a teacher of music. I continue to compose and release my music, as well as play occasional gigs.
In May 2016, with my band, I won first place in the Battle of the Bands at the Hard Rock Cafe Bahrain.
My EP “I Am” (2017) received positive reviews from “All About Jazz” and “Smooth & Soul”.
</p>
<p>I compose and release original violin music fully on my own, occasionally collaborating with my musician friends. I handle all the production, bookings and promos by myself; I have no label, sponsors, etc. so it is an entirely DIY project.
Even this website is completely brewed by me.

Currently, I'm based in Al Ain, UAE, where I work as Violin and Music Theory Teacher.
        </p>
            </div>
           
</div>
    )
}