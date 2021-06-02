import React from 'react'
import { Albums } from '../albums/Albums'
import { Artists } from '../artists/Artists'
import { Tracks } from '../tracks/Tracks'

export const Results = ({onSubmitForm, disableButton, spotifyData, dataType}) => {
    /*Depending of the dataType (album, artist, track) this component will render the component that match with the component*/
    return (
        <div className="col-md-8 results">
            <div className="card-body">
                <h3 className="mb-4 font-weight-bold">Result List</h3>

                <div className="d-flex bd-highlight">
                    <h2 className="p-2 w-100 bd-highlight font-weight-bold">
                        {dataType.charAt(0).toUpperCase() + dataType.slice(1)}
                    </h2>   
                
                <div className="d-grid gap-2 col-8 mx-auto">
                    <button 
                        className="btn btn-primary" 
                        type="button" 
                        onClick={onSubmitForm}
                        disabled={disableButton}
                    >
                        Sort by popularity: Ascending
                    </button>
                </div>
            </div>

                <div>
                    {
                        dataType === 'artist' && spotifyData.map( (items, id) => ( 
                            <Artists 
                                key={id} 
                                items={items} 
                            /> 
                        ))
                    }

                    {
                        dataType === 'album' && spotifyData.map( (items, id) => ( 
                            <Albums 
                                key={id} 
                                items={items} 
                            /> 
                        ))
                    }

                    {
                        dataType === 'track' && spotifyData.map( (items, id) => ( 
                            <Tracks 
                                key={id} 
                                items={items} 
                            /> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
