import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAlbumDetails } from '../../helpers/axiosQueries';

export const AlbumDetails = () => {

    const [album, setAlbum] = useState({
        name: '',
        urlImage: '',
        tracks: []
    });

    const { name, urlImage, tracks } = album;

    const {id} = useParams();

    useEffect( () => {
        getAlbumDetails(id)
            .then( (res) => {
                const data = res;

                setAlbum({
                    name: data.name,
                    urlImage: data.images[0].url,
                    tracks: data.tracks.items
                });
            });
    }, [id]);

    return (
        <div>

            <div className="card">
                <div className="card-header text-center">
                    {name}
                </div>
                <img src={urlImage} className="card-img-top med-img" alt={name} />
                <div className="card-body">
                    <h5>Tracks</h5>
                    <ul className="list-group">

                    {
                        tracks.map( (track, track_number) => <li key={track_number} className="list-group-item">{`${track.track_number}.- ${track.name}`}</li> )
                    }
                    </ul>

                </div>
                <div className="text-left p-2">
                    <Link className="btn btn-primary pull-right" to="/">Back</Link>
                </div>
                
            </div>
        </div>
    )
}
