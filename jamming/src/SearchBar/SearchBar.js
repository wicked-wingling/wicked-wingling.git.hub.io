import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(text)
        setText('');
    };

    return (
        <form className='searchBar' onSubmit={handleSubmit}>
            <input 
            value={text}
            type='text' 
            name='search'
            placeholder='Search for Songs' 
            onChange={handleTextChange}
            />
            <input type='submit' value='Search' />
        </form>
    )
}
    
    

export default SearchBar;

