import React from 'react';

const SearchBar = () => {
    return (
      <div className='container'>
        <form className='formContainer'>
          <input 
            htmlFor='search bar'
            type='search'
            id='searchBar'
            name='searchBar'
            placeholder='Search for Songs'
            className='searchbar'
          />
          <br/><button type='submit' className='searchbutton'>Search</button>
        </form>
      </div>
      
    );
  };

  export default SearchBar;