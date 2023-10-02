import {React, useState} from 'react';
import './App.css';
import './SearchBar.css';
import SearchBar from './searchBar.js';
import SearchResults from './searchResults';
import PlayList from './playList';

function App() {
const [song, setSong] = useState(['Sometimes The Hammer, Sometimes The Nail']);
const [artist, setArtist] = useState(['A Day To Remember']);
const [albumn, setAlbumn] = useState(['C, C']);

const [customSong, setCustomSongTitle] = useState(['Enter Sandman']);
const [customArtist, setCustomArtist] = useState('Metalica');
const [customAlbumn, setCustomAlbumn] = useState('Poop');
  
  return (
    <>
      <header className="App-header">
        <h1>Jamming</h1>
      </header>
      <SearchBar />
      <main className='container'>
        <section>
          <h2>Search Results</h2>
          <SearchResults song={song} artist={artist} albumn={albumn}/>
        </section>
        <section>
          <h2>Playlist</h2>
          <PlayList song= {customSong} artist={customArtist} albumn={customAlbumn}/>
        </section>
      </main>
    </>
  );
}

export default App;
