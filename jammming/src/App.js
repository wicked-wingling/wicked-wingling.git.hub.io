import React from 'react';
import './App.css';
import './SearchBar.css';

function App() {

  

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
  
const SearchResults = () => {
  return (
    <ul className='card'>
      <li className='songlist'>
        <div className='songs'>
          <span className='songtitle'>Song Title 1</span>
          <br/><span className='songartist'>by: ~Artist Name~, </span>
          <span className='albumntitle'>Albumn Title</span>
        </div>
        <button type='submit' className='addbutton'>+</button>
      </li>
      <li className='songlist'>
        <div className='songs'>
          <span className='songtitle'>song pick 2 but this text is here to rep. some long name</span>
          <br /><span className='songartist'>by: ~Artist Name~, </span>
          <span className='albumntitle'>Albumn Title</span>
          </div>
        <button type='submit' className='addbutton'>+</button>
      </li>
      <li className='songlist'>
        <div className='songs'>
          <span className='songtitle'>song pick some long name</span>
          <br /><span className='songartist'>by: ~Artist Name~, </span>
          <span className='albumntitle'>Albumn Title</span>
          </div>
        <button type='submit' className='addbutton'>+</button>
      </li>      
    </ul>
  );
}

const PlayList = () => {
  return (
    <ul className='card'>
      <li className='songlist'>
        <button type='submit' className='removebutton'>-</button>
        <div className='songs'>
          <span className='songtitle'>Song on playlist 1</span>
          <br/><span className='songartist'>Artitst </span>
          <span className='albumntitle'>albumn</span>
        </div>
        </li>      
    </ul>
  );
}

  return (
    <>
      <header className="App-header">
        <h1>Jamming</h1>
      </header>
      <SearchBar />
      <main className='container'>
        <section>
          <h2>Search Results</h2>
          <SearchResults />
        </section>
        <section>
          <h2>Playlist</h2>
          <PlayList />
        </section>
        
      </main>
      
    </>
  );
}

export default App;
