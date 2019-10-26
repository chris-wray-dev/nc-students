import React from 'react';
import './Component-styles/StudentCard.css'

const blocks = {
  fun: 'Fundamentals',
  be: 'Back-end',
  fe: 'Front-end',
  proj: 'Project',
  grad: 'Graduate'
}

const StudentCard = ({ student, openModal }) => {

  const handleClick = () => {
    openModal(student._id);
  }

  return (
    <div onClick={ handleClick } className="student-card">
      <div className={`student-name `}>{ student.name } </div>
      <i className={`fas fa-6x fa-user ${student.currentBlock}`}></i>
      <p>{ blocks[student.currentBlock] }</p>
      <p>Cohort : { student.startingCohort }</p> 
    </div>
  )
  
}

export default StudentCard