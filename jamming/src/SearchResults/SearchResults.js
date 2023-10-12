import React from 'react';
import './SearchResults.css';

const SearchResults = () => {
    return (
        <section className='results'>
            <div className='card'>
                <h3>song title</h3>
                <p>albumn</p>
                <p>artist</p>
            </div>
            <button className='addButton'>+</button>
        </section>
    );
}

export default SearchResults 