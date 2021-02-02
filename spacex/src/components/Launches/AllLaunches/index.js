import React from 'react';
import LaunchsTable from './LaunchsTable';
import './index.css';

function AllLaunches({ launches, interval }) {
  return (
    <div className="AllLaunches">
      <div className="title-container">
        {interval === 'Past Launches' ?
          <h1>Lançamentos Anteriores</h1>
          :
          <h1>Lançamentos</h1>
        }
      </div>
      <div className="content-container">
        <LaunchsTable launches={launches} />
      </div>
    </div>
  );
}

export default AllLaunches;