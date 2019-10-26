import React from 'react';

class Cohorts extends React.Component {
  state = {
    students: [],
    isLoading: true
  }

  render() {
    return (
      <div className="cohorts-container">
        <h2>Cohorts</h2>
      </div>
    )
  }
}

export default Cohorts