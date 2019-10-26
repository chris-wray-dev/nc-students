import React from 'react';

class AddNewStudent extends React.Component {
  state = {
    name: '',
    startingCohort: 0
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewStudent(this.state);
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div className="add-student-container">
        <h2>Add New Student</h2>
        <form className="add-student-form" onSubmit={this.handleSubmit}>
          <label htmlFor="studentName">
            Student Name : 
            <input id="name" onChange={ this.handleChange } type="text" placeholder="Student Name"/>
          </label>
          <label htmlFor="startingCohort">
            Starting Cohort : 
            <input id="startingCohort" onChange={ this.handleChange } type="number"/>
          </label>
          <button type="submit">Add Student</button>
        </form>
      </div>
    )
  }
  
}

export default AddNewStudent;
