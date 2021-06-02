import React from 'react'
import { Album } from './Album'

export const Albums = ({items}) => {
    /*Component that gets the Album List and map each item in a card */
    return (
        <div className="card">
            {
                items.map( (album) => (
                    <Album key={album.id} album={album} />
                ))
            }
        </div>
    )
}
