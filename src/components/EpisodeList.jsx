import React, { useState, useEffect } from 'react';
import EpisodeCard from './EpisodeCard';
import '../App.css';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        console.log("fetching episodes")
        console.log(apiUrl)
        console.log(process.env.REACT_APP_API_URL)
        const response = await fetch(apiUrl);
        const data = await response.json();
        setEpisodes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setLoading(false);
      }
    };
  
    fetchEpisodes();
  }, [apiUrl]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="episode-list">
      {episodes.length > 0 ? (
        episodes.map((episode) => (
          <EpisodeCard key={episode.title} episode={episode} />
        ))
      ) : (
        <p>No episodes found.</p>
      )}
    </div>
  );
};

export default EpisodeList;
