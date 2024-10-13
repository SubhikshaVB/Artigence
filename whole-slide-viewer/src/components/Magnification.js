import React from 'react';

const Magnification = ({ setZoomLevel }) => {
  const handleZoomChange = (factor) => {
    setZoomLevel(factor);
  };

  return (
    <div className="magnification-controls">
      <h4>Magnification</h4>
      <button onClick={() => handleZoomChange(2)}>2X</button>
      <button onClick={() => handleZoomChange(4)}>4X</button>
      <button onClick={() => handleZoomChange(10)}>10X</button>
      <button onClick={() => handleZoomChange(20)}>20X</button>
      <button onClick={() => handleZoomChange(40)}>40X</button>
      <button onClick={() => handleZoomChange(60)}>60X</button>
      <button onClick={() => handleZoomChange(100)}>100X</button>
    </div>
  );
};

export default Magnification;
