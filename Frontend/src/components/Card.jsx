import './Card.css';
import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h2>Lokeshwar</h2>
      <p>A TA in the 100xDevs Cohort 2.0</p>
      <div className="interests">
        <h3>Interests</h3>
        <ul>
          <li>Ionic</li>
          <li>Open Source</li>
          <li>App Dev</li>
        </ul>
      </div>
      <div className="social-buttons">
        <a href="#" className="linkedin">
          LinkedIn
        </a>
        <a href="#" className="twitter">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Card;
