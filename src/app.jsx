import React from 'react';
import EpisodeList from './components/EpisodeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Podcast Summarizer.Ai</h1>
        <h3>Podcast Summary Powered by GenAI</h3>
      </header>
      <main>
        <EpisodeList />
      </main>
    </div>
  );
}

export default App;
