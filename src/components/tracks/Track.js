import React, { memo } from 'react';
import noImg from '../../assets/img/no-img.png';

export const Track = memo(({ track }) => {

    return (



        <div className="card" >
            {
                track.album.images && track.album.images.length > 0
                    ?
                    <img src={track.album.images[0].url} className="card-img-top min-img" alt={track.name}></img>
                    :
                    <img src={noImg} className="card-img-top min-img" alt={track.name}></img>
            }
            <div className="card-body">
                <h5 className="card-title">Name: {track.name}</h5>
                <p className="card-text">Popularity: {track.popularity}</p>
                
            </div>
        </div>
    )
})

