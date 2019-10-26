import React from 'react';

class Blocks extends React.Component {
  state = {
    students: [],
    isLoading: true
  }

  render() {
    return (
      <div className="blocks-container">
        <h2>Blocks</h2>
      </div>
    )
  }
}

export default Blocks