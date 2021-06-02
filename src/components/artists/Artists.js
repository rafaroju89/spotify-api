import React from 'react'
import { Artist } from './Artist'

export const Artists = ({items}) => {
    /*Component that gets the Artist List and map each item in a card */
    return (
        <div className="card">
            {
                items.map( (artist, id) => (
                    <Artist key={id} artist={artist} />
                ))
            }
        </div>
    )
}
