import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const EpisodeCard = ({ episode }) => {
  const { title, publish_date, TLDR, summary } = episode;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="episode-card">
      <h2>{title}</h2>
      <p>Published on: {publish_date.slice(0, -5)}</p>
      <p>{TLDR}</p>

      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>

      {isExpanded && (
        <div className="episode-summary">
          <ReactMarkdown>{summary}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default EpisodeCard;
