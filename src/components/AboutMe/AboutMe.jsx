import React from 'react';

function AboutMe() {
  return (
    <div className="about">
      <div className="title">
        <h1>About Me</h1>
        <div className="undeLine"></div>
      </div>
      <div className="details">
        <div className="aside">
          <p>
            Fully committed to the philosophy of life-long learning, I’m a full
            stack developer with a deep passion for JavaScript, React and all
            things web development. The unique combination of creativity, logic,
            technology and never running out of new things to discover, drives
            my excitement and passion for web development. When I’m not at my
            computer I like to spend my time reading, keeping fit and playing
            guitar.
          </p>
        </div>
        <div className="article">
          <div className="line">
            <div className="card">
              <p>HTML</p>
            </div>
            <div className="card">
              <p>CSS</p>
            </div>
            <div className="card">
              <p>JAVASCRIPT</p>
            </div>
          </div>
          <div className="line">
            <div className="card">
              <p>REACT</p>
            </div>
            <div className="card">
              <p>NEXTJS</p>
            </div>
            <div className="card">
              <p>NODEJS</p>
            </div>
            <div className="card">
              <p>MONGODB</p>
            </div>
          </div>
          <div className="line">
            <div className="card">
              <p>SASS</p>
            </div>
            <div className="card">
              <p>GIT</p>
            </div>
            <div className="card">
              <p>EXPRESS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
