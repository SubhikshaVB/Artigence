import React from 'react';

const CellStats = ({ title, data }) => {
  return (
    <div className="cell-stats">
      <h3>{title} Statistics</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.count}</td>
              <td>{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CellStats;
