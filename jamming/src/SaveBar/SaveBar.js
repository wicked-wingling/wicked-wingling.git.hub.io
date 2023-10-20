import React, { useState } from 'react';
import './SaveBar.css';

const SaveBar = (props) => {
    const [listName, setListName] = useState('');

    const handleTextChange = (e) => {
        setListName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(listName.length > 0) {
            props.save(listName);       //  <========== prop to be passed to <App /> ====SAVE functions needs made!!======
            setListName('');    
        };        
    };

    return (
        <form className='saveBar' onSubmit={handleSubmit}>
            <input
            type='text'
            value={listName}
            placeholder='Playlist Name' 
            name='saveBar'
            onChange={handleTextChange}
            />
            <input type='submit' value='Save' />
        </form>
    );
};

export default SaveBar;