import './App.css';
import React from 'react';
import Jokes from './components/Jokes';
import Search from './components/Search'; 
import Filter from './components/Filter';


function App() {
  return (
    <div className="App" style={{color: 'acqua',
      textAlign: 'center',
      background: 'dark',}}>
      <header style={{color: 'white',
        textAlign: 'center',
        background: 'black',
      }}>
        <h1> Web App</h1>
      </header>
      <body>
        <Search />
        <Filter/>
        <Jokes />
      </body>
    </div>
  );
}

export default App;
