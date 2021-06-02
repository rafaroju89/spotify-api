import React, {memo} from 'react';
import { Track } from './Track';

export const Tracks = memo(({items}) => {

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
