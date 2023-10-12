import React from 'react';
import './Playlist.css';

const Playlist =() => {
    return (
        <section className='playlist'>
            <button className='addButton'>-</button>
            <div className='card'>
                <h3>song title</h3>
                <p>albumn</p>
                <p>artist</p>
            </div>            
        </section>
    );
}

export default Playlist;