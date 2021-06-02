import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import noImg from '../../assets/img/no-img.png';

export const Artist = memo(({ artist }) => {
    const history = useHistory();


    const onDetail = () => {
        history.push(`/artist/details/${artist.id}`);
    }

    return (



        <div className="card" >
            {
                artist.images && artist.images.length > 0
                    ?
                    <img src={artist.images[0].url} className="card-img-top min-img" alt={artist.name}></img>
                    :
                    <img src={noImg} className="card-img-top min-img" alt={artist.name}></img>
            }
            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
                <p className="card-text">Popularity: {artist.popularity}</p>
                <button onClick={onDetail} className="btn btn-primary">Details</button>
            </div>
        </div>
    )
})

