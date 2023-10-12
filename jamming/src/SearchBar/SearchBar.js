import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
    <form className='searchBar'>
        <label for="search bar"></label>
        <input type='text' name='search' id='search' placeholder='Search for Songs'></input>
        <input type='submit' value='Search'></input>
    </form>
    )
}
    
    

export default SearchBar;


/*



*/