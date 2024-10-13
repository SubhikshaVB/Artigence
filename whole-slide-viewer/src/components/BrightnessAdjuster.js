import React from 'react';

const BrightnessAdjuster = ({ setBrightness }) => {
  return (
    <div className="brightness-adjuster">
      <h4>Brightness Adjuster</h4>
      <label>
        Brightness:
        <input type="range" min="0" max="200" defaultValue="100" onChange={(e) => setBrightness(e.target.value)} />
      </label>
      <label>
        Contrast:
        <input type="range" min="0" max="200" defaultValue="100" onChange={(e) => setBrightness(e.target.value)} />
      </label>
      <label>
        Saturation:
        <input type="range" min="0" max="200" defaultValue="100" onChange={(e) => setBrightness(e.target.value)} />
      </label>
      <label>
        Gamma:
        <input type="range" min="0" max="200" defaultValue="100" onChange={(e) => setBrightness(e.target.value)} />
      </label>
    </div>
  );
};

export default BrightnessAdjuster;
