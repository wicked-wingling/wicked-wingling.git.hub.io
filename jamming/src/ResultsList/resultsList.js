import React, { useEffect } from "react";
import './resultsList.css';

const ResultsList = (props) => {

const handleAddClick = () => {
    props.addResult(props.result)
};

    return (
        <li className='resultCard'>
            <div>
                <h3>{props.result.song}</h3>
                <p>{props.result.artist}</p>
                <p>{props.result.albumn}</p>    
            </div>
            <button id='addButton' onClick={handleAddClick}>+</button>            
        </li>
    );
};

export default ResultsList;