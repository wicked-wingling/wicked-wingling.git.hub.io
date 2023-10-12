import React from 'react';
import './SubmitPlaylist.css';

const SubmitPlaylist =() => {
    return (
        <form className='submitPlaylist'>
            <input type='text' id='submitPlaylist' placeholder='Playlist Name'required ></input>
            <input type='submit' value='Save'></input>
        </form>
    );
}

export default SubmitPlaylist;