import React from "react";

const SearchResults = (props) => {
    return (
      <ul className='card'>
  
        <li className='songlist'>
          <div className='songs'>
            <h3 className='songtitle'>{props.song}</h3>
            <p className='songartist'>{props.artist}</p>
            <p className='albumntitle'>{props.albumn}</p>
          </div>
          <button type='submit' className='addbutton'>+</button>
        </li>
  
      </ul>
    );
  }

  export default SearchResults