// import React from 'react';

// const ReportButton = () => {
//   return (
//     <button className="report-button">Generate Report</button>
//   );
// };

// export default ReportButton;


// src/components/ReportButton.js
import React from 'react';
import { downloadReport } from '../utils/exportUtils';

const ReportButton = ({ data }) => {
    const handleDownload = () => {
        downloadReport(data);
    };

    return (
        <button onClick={handleDownload}>
            Download Report
        </button>
    );
};

export default ReportButton;


