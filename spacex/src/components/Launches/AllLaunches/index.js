import React from 'react';
import LaunchsTable from './LaunchsTable';
import './index.css';

function AllLaunches({ launches }) {
  return (
    <div className="AllLaunches">
      <div className="title-container">
        <h1>Lançamentos</h1>
      </div>
      <div className="content-container">
        <LaunchsTable launches={launches} />
      </div>
    </div>
  );
}

export default AllLaunches;