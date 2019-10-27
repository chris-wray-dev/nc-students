import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Component-styles/GraphOfBlocks.css'

import getGraphData from '../utils';

const GraphOfBlocks = ({ blockHistory }) => {
  const data = getGraphData(blockHistory);

  return (
    <div className="graph-container">
      <Doughnut data={ data } />
    </div>
  )
}

export default GraphOfBlocks;
