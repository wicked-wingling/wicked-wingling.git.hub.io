import React from "react";
import './Playlist.css';

const Playlist = (props) => {

const handleRemoveClick = () => {
    props.removeResult(props.result)
}

    return (
        <li className='playlistCard'>
            <button id='removeButton' onClick={handleRemoveClick}>-</button> 
            <div>
                <h3>{props.result.name}</h3>
                <p>{props.result.artists[0].name}</p>
                <p>{props.result.album.name}</p>    
            </div>                       
        </li>
    );
};

export default Playlist;