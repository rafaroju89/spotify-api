import React from 'react';
import { Link } from 'react-router-dom';
import spotifyImg from '../../assets/img/spotify-ico.png';

export const Navbar = () => {
    return (

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link
                    to={'/'}
                    className="text-dark navbar-brand"
                >
                    <img src={spotifyImg} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Spotify - Music Track Searcher
                    </Link>

            </div>
        </nav>
    )
}