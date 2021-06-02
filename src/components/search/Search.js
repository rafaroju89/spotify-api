import React, { useState } from 'react';
import { Results } from './Results';

import { getAll } from '../../helpers/axiosQueries';

export const Search = () => {
    /*Save the information of the form */
    const [ form, setForm ] = useState({
        artist: '',
        album: '',
        track: ''
    });
    /*To disable the button because I dont want that click on it when there is not an input filled */
    const [ disableButton, setDisableButton ] = useState(true);
    /*Here is saved the data of the API */
    const [ spotifyData, setSpotifyData ] = useState([]);

    /*the type is saved to know which component will be used (Album, Artist or Track) */
    const [ dataType, setDataType ] = useState('');



    const { artist, album, track } = form;

    /*Method that  handles the changes of the form and the button*/
    const handleChangeForm = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });


        if ( artist.length > 0 || album.length > 0 || track.length > 0 ) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }

    /*Method that handles the Form submit action */
    const onSubmitForm = (e) => {
        e.preventDefault();

        setForm({
            artist: '',
            album: '',
            track: ''
        });
        setDisableButton(true);

        /*it gets all the spotifyData to send to Results component  */
        getAll(form).then(artistResponse => {     
            if ( artistResponse.artists ) {
                setSpotifyData( [artistResponse.artists.items] );
                setDataType('artist');
            } else if ( artistResponse.albums ) {
                setSpotifyData( [artistResponse.albums.items] );
                setDataType('album');
            } else if ( artistResponse.tracks ) {
                setSpotifyData( [artistResponse.tracks.items] );
                setDataType('track');
            }
        });

    }

    return (
        <div className="row justify-content-center">
        <div className="col-md-8">
             <div className="card">
                 <div className="card-body">
                     <h2 className="text-center mb-4 font-weight-bold">
                         Discover about your favorite artist.
                     </h2>

                     <form
                         onSubmit={ onSubmitForm }
                     >
                         <div className="form-group">
                             <input
                                 type="text"
                                 className="form-control my-3"
                                 placeholder="Artist"
                                 name="artist"
                                 value={artist}
                                 onChange={ handleChangeForm }                               
                             />
                         </div>

                         <div className="form-group">
                             <input
                                 type="text"
                                 className="form-control my-3"
                                 placeholder="Album"
                                 name="album"
                                 value={album}
                                 onChange={ handleChangeForm }                             
                             />
                         </div>

                         <div className="form-group">
                             <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Track"
                                 name="track"
                                 value={track}
                                 onChange={ handleChangeForm}                              
                             />
                         </div>
                     </form>
                 </div>
             </div>
        </div>

        <Results
            onSubmitForm={onSubmitForm} 
            disableButton={disableButton} 
            spotifyData={spotifyData} 
            dataType={dataType}
        />
     </div>
    )
}
