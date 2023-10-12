import React from 'react';
import SearchBar from '../SearchBar'
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist';
import SubmitPlaylist from '../SubmitPlaylist/SubmitPlaylist';

function App() {
  return (
    <main>
      <header>Jammming</header>
      <SearchBar />
      <SubmitPlaylist />
      <section className='container'>
        <SearchResults />
        <Playlist />
      </section>
    </main>
   
  );
}

export default App;
