// Tutorial.js
import React from 'react';

const Tutorial = ({ data }) => {
  return (
    <div className="tutorial-section">
      <h2>Tutorials</h2>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Tutorial;
