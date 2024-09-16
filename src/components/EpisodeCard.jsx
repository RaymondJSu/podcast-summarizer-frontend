import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const EpisodeCard = ({ episode }) => {
  const { title, publish_date, TLDR, summary } = episode;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Effect to handle visibility changes with animation
  useEffect(() => {
    if (isExpanded) {
      setIsVisible(true);  // Show content immediately when expanding
    } else {
      // Delay hiding the content until after fade-out animation completes (e.g., 500ms)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this with CSS transition time (0.5s)

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isExpanded]);

  return (
    <div className="episode-card">
      <h2>{title}</h2>
      <p>Wall Street Breakfast Published on: {publish_date.slice(0, -5)}</p>
      <p>{TLDR}</p>

      <div className='button-container'>
        <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? (
            <>
              <i className="fa fa-chevron-up"></i> Show Less
            </>
          ) : (
            <>
              <i className="fa fa-chevron-down"></i> Read More
            </>
          )}
        </button>
      </div>
      {/* Fade-in/fade-out animation on summary */}
      <div className={`episode-summary ${isExpanded ? 'fade-in' : 'fade-out'}`}>
        {isVisible && <ReactMarkdown>{summary}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default EpisodeCard;
