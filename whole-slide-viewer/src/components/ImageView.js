import React from 'react';

const ImageView = ({ imageSrc, zoomLevel, brightness }) => {
  return (
    <div className="image-view" style={{ filter: `brightness(${brightness}%)` }}>
      <img src={imageSrc} alt="Cell" style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.3s ease' }} />
    </div>
  );
};

export default ImageView;
