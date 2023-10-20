import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import ResultsList from '../ResultsList/resultsList';
import Playlist from '../Playlist/Playlist';
import SaveBar from '../SaveBar/SaveBar';
import './App.css';

function App() {

  const CLIENT_ID = 'bbb3a5b4367d4033a9f9a9c50faab656';
  const CLIENT_SECRET = 'd23375faa4c84d2cb71c97868f20788a'
  const REDIRECT_URI = 'http://localhost:3000/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/api/token';
  const SCOPE = 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private';

  const [accessToken, setAccessToken] = useState('');
  const [results, setResults] = useState([
    {      
      id: 1,
      song: 'Sample 1',
      artist: 'Sample Artist 1',
      albumn: 'Sample Albumn 1'
    },{      
      id: 2,
      song: 'Sample 2',
      artist: 'Sample Artist 2',
      albumn: 'Sample Albumn 2'
    },{      
      id: 3,
      song: 'Sample 3',
      artist: 'Sample Artist 3',
      albumn: 'Sample Albumn 3'
    },{      
      id: 4,
      song: 'Sample 4',
      artist: 'Sample Artist 4',
      albumn: 'Sample Albumn 4'
    }
  ]);
  const [selectedlist, setSelectedlist] = useState([]);


  /*
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
        token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

        window.location.hash = '';
        window.localStorage.setItem('token', token);
      }
    setAccessToken(token);
  }, []);
 */

  const login = () => {
    const promise = fetch(AUTH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    })
    .then(promise => promise.json())    
    .then(data => setAccessToken(data.access_token))

    return console.log(accessToken)
  };


  const logout = () => {
    setAccessToken('');
    window.localStorage.removeItem('token');
  };

  

  // ###############     API CALL ======= THIS IS WHERE THE *RESULTS* POPULATES FROM    #####################

  const searchResults = async(e) => {
    
    
    
      const response = await fetch(`https://api.spotify.com/v1/search?q=${e}&type=track`, {
        method: 'GET',
        header: { 
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        }
      })
     .then(response.json())
     .then(data => console.log(data))
    
  };


  
  const addResult = (result) => {
  //        ======= REMOVE FROM RESULT QUERY ========
    setResults((item)=> 
    item.filter((array) => 
    array.id !== result.id));
  //        ===== ADD TO CUSTOM PLAYLIST ======
    setSelectedlist((res) => [result, ...res])
  };

  const removeResult = (result) => {
  //        ======= REMOVE FROM CUSTOM PLAYLIST =======
    setSelectedlist((item) => 
    item.filter((array) => 
    array.id !== result.id));
  //        ======= ADD TO RESULT QUERY ============
    setResults((res) => [result, ...res])
  };



  return (
    <div>
      <header>
        <h1>Jammming</h1>
        {!accessToken ? 
        <button onClick={login} 
        className='login'
        >Login to Spotify</button> 
        : <button onClick={logout}>Logout</button>}
      </header>
       
      {accessToken ? 
        <main>
            <SearchBar search={searchResults} />
            <div className='card'>
              <ul>
                {results.map((result) => 
                  <ResultsList key={result.id} result={result} addResult={addResult} />              
                )}
              </ul>
              <ul>
                {selectedlist.map((item) => 
                  <Playlist key={item.id} result={item} removeResult={removeResult} />
                )}
                <SaveBar />
              </ul>  
            </div>
            
        </main> : <h2 className='loginPrompt'>Please Login</h2>}
        
    </div>   
  );
}

export default App;
