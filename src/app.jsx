import React from 'react';
import EpisodeList from './components/EpisodeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Podcast Summarizer.Ai</h1>
        <p>Podcast Summaries Powered by GenAI</p>
      </header>
      <main>
        <EpisodeList />
      </main>
    </div>
  );
}

export default App;
