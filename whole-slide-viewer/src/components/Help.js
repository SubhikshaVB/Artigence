// Help.js
import React from 'react';

const Help = () => {
  return (
    <div className="help-section">
      <h2>Help & Support</h2>
      <p>If you have any questions or need assistance, please refer to the following sections:</p>
      <h3>Getting Started</h3>
      <p>To use the Cell Image Analyzer, upload an image of the cell you want to analyze. You can adjust the zoom level and brightness to get a clearer view.</p>
      <h3>Statistics</h3>
      <p>The statistics section displays information about the different types of cells present in the image. You can view the count and percentage for each type.</p>
      <h3>Sharing Results</h3>
      <p>You can share your analysis results with others using the share options provided.</p>
      <h3>Contact Us</h3>
      <p>If you encounter any issues, please reach out to our support team at <a href="mailto:support@example.com">support@example.com</a>.</p>
    </div>
  );
};

export default Help;
