import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArtistDetails } from '../../helpers/axiosQueries';

export const ArtistDetails = () => {

    const [artist, setArtist] = useState({
        name: '',
        urlImage: '',
        popularity: '',
        followers: ''
    });

    const { name, urlImage, popularity, followers } = artist;


    const {id} = useParams();

    useEffect( () => {
        getArtistDetails(id)
            .then( (res) => {
                const data = res;

                setArtist({
                    name: data.name,
                    urlImage: data.images[0].url,
                    popularity: data.popularity,
                    followers: data.followers.total
                });
            });
    }, [id]);

    return (
        <div>
            <div className="card results">
                <div className="card-header text-center">
                    {name}
                </div>
                <img src={urlImage} className="card-img-top med-img" alt={name} />
                <div className="card-body">
                    <p className="card-text">Popularity: {popularity}</p>
                    <p className="card-text">Followers: {followers}</p>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <Link className="btn btn-primary" to="/">Go Back</Link>
                </div>
                
            </div>
        </div>
    )
}
