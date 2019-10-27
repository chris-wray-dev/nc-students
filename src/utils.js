const getGraphData = (blockHistory) => {
  let blockTally = blockHistory.reduce((tally, block) => {
    if (block.name === 'Graduated') return tally;
    tally[block.name] ? tally[block.name]++ : tally[block.name] = 1;
    return tally;
  }, {});

  const data = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: []
    }]
  };

  const colors = {
    
    'Fundamentals': 'rgb(160, 228, 152)',
    'Back End': 'rgb(125, 182, 203)',
    'Front End': 'rgb(188, 140, 205)',
    'Project Phase': 'rgb(179, 139, 80)'

  }

  Object.keys(blockTally).forEach(key => {
    data.labels.push(key);
    data.datasets[0].data.push(blockTally[key]);
    data.datasets[0].backgroundColor.push(colors[key]);
  });
  
  return data;
}

export default getGraphData;
