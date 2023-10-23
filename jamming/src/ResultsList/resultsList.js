import React from "react";
import './resultsList.css';

const ResultsList = (props) => {

const handleAddClick = () => {
    props.addResult(props.result)
};

    return (
        <li className='resultCard'>
            <div>
                <h3>{props.result.name}</h3>
                <p>{props.result.artists[0].name}</p>
                <p>{props.result.album.name}</p>    
            </div>
            <button id='addButton' onClick={handleAddClick}>+</button>            
        </li>
    );
};

export default ResultsList;