import React from 'react';
import './Component-styles/AddNewStudent.css'

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
        <i className="add-student-icon fas fa-5x fa-user-plus"></i>
        <hr/>
        <form className="add-student-form" onSubmit={this.handleSubmit}>
          <label htmlFor="studentName">
            Student Name : 
            <input id="name" onChange={ this.handleChange } type="text" placeholder="Student Name"/>
          </label>
          <label htmlFor="startingCohort">
            Starting Cohort : 
            <input id="startingCohort" onChange={ this.handleChange } type="number"/>
          </label>
          <h3 onClick={ this.handleSubmit } className="add-user-button" >
            <i className="fas fa-2x fa-user-plus" />
            Add student...
          </h3>
            
        </form>
      </div>
    )
  }
  
}

export default AddNewStudent;
