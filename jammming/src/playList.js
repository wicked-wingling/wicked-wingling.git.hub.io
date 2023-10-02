import React from "react";

const PlayList = (props) => {
    return (
      <ul className='card'>
        <li className='songlist'>
          <button type='submit' className='removebutton'>-</button>
          <div className='songs'>
            <h3 className='songtitle'>{props.song}</h3>
            <p className='songartist'>{props.artist}</p>
            <p className='albumntitle'>{props.albumn}</p>
          </div>
          </li>      
      </ul>
    );
  }

  export default PlayList;