import React from 'react';
import './App.css';
import './SearchBar';

function App() {

  const SearchBar = () => {
    return (
      <form>
        <input 
          htmlFor='search bar'
          type='search'
          id='searchBar'
          name='searchBar'
        />
      </form>
    );
  };
  
const SearchResults = () => {
  return (
    <ul>
      <li>song pick 1</li>
      <li>song pick 2</li>
      <li>song pick 3</li>
    </ul>
  );
}

  return (
    <>
      <header className="App-header">
        <h1>Jamming</h1>
      </header>
      <SearchBar />
      <SearchResults />
    </>
  );
}

export default App;
