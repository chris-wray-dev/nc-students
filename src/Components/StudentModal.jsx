import React from 'react';
import './Component-styles/StudentModal.css'

const StudentModal = ( { student } ) => {
  return (
    <div className="student-details-container">
      <p> { student.name }</p>
      <div className="student-progress">
        { student.blockHistory.map((block, index) => {
            return block.slug !== 'grad' 
              ? (<div className={`block ${block.slug}`} key={index} > 
                  { block.slug.toUpperCase() } </div>)
              : (null)
        })}
      </div>
      <button>Graduate</button>
      <button>Delete</button>
    </div>
  )
}

export default StudentModal;
