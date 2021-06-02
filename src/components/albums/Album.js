import React, {memo} from 'react';
import { useHistory } from 'react-router-dom';
import noImg from '../../assets/img/no-img.png';

export const Album = memo(({album}) =>{
    /*History is to used to go back to the preview view */
    const history = useHistory();

    const onDetail = () => {
        history.push(`/album/details/${album.id}`);
    }
    
    return(



<div className="card" >
            {
                album.images && album.images.length > 0
                    ?
                    <img src={album.images[0].url} className="card-img-top min-img" alt={album.name}></img>
                    :
                    <img src={noImg} className="card-img-top min-img" alt={album.name}></img>
            }
            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <button onClick={onDetail} className="btn btn-primary">Details</button>
            </div>
        </div>
    )
})