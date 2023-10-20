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
                <h3>{props.result.song}</h3>
                <p>{props.result.artist}</p>
                <p>{props.result.albumn}</p>    
            </div>                       
        </li>
    );
};

export default Playlist;