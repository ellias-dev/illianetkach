import React from "react";
import { ilyanetkachAudio } from "./audiodata";

export const Music = () => {
    const ilyaAlbumList = ilyanetkachAudio.map(album => {
        return (
           
                <div className="row sec">
                    
                    <div className="col-12 col-md-3 sec">
                        <img src={album.image} className='img-fluid mx-auto d-block' alt={'Illia Netkach - ' + album.title}></img>
                    </div>
                    <div className="col-12 col-md-9 sec">
                        <h3 align='center' id={album.id}>{album.title}</h3>
                        <p align='center'>{album.date}</p>
                        {album.player}
                        <p className="margin-top">{album.description}</p>
                        <p className="font-weight-light"><span className="font-weight-bold font-italic">Credits: </span>{album.credits}</p>
                        <div className="musicLinks d-flex flex-wrap">
                            <a href={album.links.bandcamp} target='_blank'><i class="fa-brands fa-bandcamp"></i> Bandcamp</a>
                            <a href={album.links.spotify} target='_blank'><i class="fa-brands fa-spotify"></i> Spotify</a>
                            <a href={album.links.amazon} target='_blank'><i class="fa-brands fa-amazon"></i> Amazon</a>
                            <a href={album.links.apple} target='_blank'><i class="fa-brands fa-itunes"></i> Apple</a>
                        </div>
                    </div>
                    
                    
                </div>
            
        )   
});

return (
    <div className="sec sec-margin content container-fluid">
        <h2>Music</h2>
        {ilyaAlbumList}
    </div>
)

}