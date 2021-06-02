import React, {memo} from 'react';
import { Track } from './Track';

export const Tracks = memo(({items}) => {
    /*Component that gets the Track List and map each item in a card */
    return (
        <div className="card">
            {
                items.map( (track, id) => (
                    <Track key={id} track={track} />
                   
                ))
            }
        </div>
    )
})
