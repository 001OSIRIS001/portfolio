import React from 'react';

function Projects() {
  return (
    <div className="portfolio">
      <div className="title">
        <h1>Projects</h1>
        <div className="underline"></div>
      </div>
      <div className="details">
        <div className="aside"></div>
        <div className="article">
          <h2>lifeinvader Social Media App</h2>
          <p>
            Full stack social media application built with React, Node.js,
            Express.js, MongoDB, Socket.io and AWS S3.
          </p>
          <button>LIVE APP</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
