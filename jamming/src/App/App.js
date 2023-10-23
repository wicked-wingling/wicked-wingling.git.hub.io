import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import ResultsList from '../ResultsList/resultsList';
import Playlist from '../Playlist/Playlist';
import SaveBar from '../SaveBar/SaveBar';
import './App.css';

function App() {

  const CLIENT_ID = 'bbb3a5b4367d4033a9f9a9c50faab656';
  //const CLIENT_SECRET = 'd23375faa4c84d2cb71c97868f20788a'
  const REDIRECT_URI = 'http://localhost:3000/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const SCOPE = 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private';


  const [profile, setProfile] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [results, setResults] = useState([]);
  const [selectedlist, setSelectedlist] = useState([]);


  useEffect( () => {
    
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if(!accessToken && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = ''
      window.localStorage.setItem('token', token);
    }

    setAccessToken(token)
    
  }, [accessToken]);

  const login = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPE}&show_dialog=true`;
  };


  useEffect( () => {
    const retrieveProfile = async() => {
      try {
        const res = await fetch('https://api.spotify.com/v1/me', {
          method: 'GET',
          headers: {'Authorization': 'Bearer ' + accessToken}
        })

        if(res.ok) {
          const jsonRes = await res.json();
          setProfile(jsonRes)
          console.log(jsonRes)
        }
      } catch(error) {
        console.log(error)
      }
    }
    retrieveProfile()
  }, [])
  


  const logout = () => {
    window.location.hash = ''
    setAccessToken('');
    window.localStorage.removeItem('token');
  };

  

  // ###############     API CALL ======= THIS IS WHERE THE *RESULTS* POPULATES FROM    #####################

  const searchResults = async(e) => {

    try {
      const response = await fetch('https://api.spotify.com/v1/search?q=' + e + '&type=track', {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + accessToken}
      })
     
      if (response.ok) {
        const jsonResponse = await response.json();
        setResults(jsonResponse.tracks.items)
        //console.log(jsonResponse.tracks.items);
      }
            
    } catch(error) {
      console.log(error)
    }     
  };


  
  const addResult = (result) => {
    if(!selectedlist.includes(result.id)){
      //        ======= REMOVE FROM RESULT QUERY ========
    setResults((item)=> 
    item.filter((array) => 
    array.id !== result.id));
  //        ===== ADD TO CUSTOM PLAYLIST ======
    setSelectedlist((res) => [result, ...res])
    }  
  };


  const removeResult = (result) => {
    if(!results.includes(result.id)) {
      //        ======= REMOVE FROM CUSTOM PLAYLIST =======
    setSelectedlist((item) => 
    item.filter((array) => 
    array.id !== result.id));
  //        ======= ADD TO RESULT QUERY ============
    setResults((res) => [result, ...res])
    }  
  };

  const savePlaylist = async(e) => {
    bodyParams = {
      name:`${e}`,
      description: `${e}`,
      public: false
    };
    try{
      const response = await fetch('https://spotify.com/v1/users/' + profile.id + '/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        body: {bodyParams.stringify()}
      })
    }catch(error) {
      console.log(error)
    }

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

      <p className='profile'>ID: {profile.id}</p>
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
                <SaveBar save={savePlaylist}/>
              </ul>  
            </div>
            
        </main> : <h2 className='loginPrompt'>Please Login</h2>}
        
    </div>   
  );
}

export default App;
