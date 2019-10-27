import React from 'react';
import './Component-styles/StudentModal.css'

const blocks = [
  'Fundamentals',
  'Back-end',
  'Front-end',
  'Project',
  'Graduate'
]

const StudentModal = ( { student, currentBlock } ) => {

  const handleClick = (event) => {

    if (event.target.id === 'graduate-button') {
      console.log(blocks[blocks.indexOf(currentBlock) + 1]);
    }
    
  }

  return (
    <div className="student-details-container">
      <h3> { student.name }</h3>
      <h4> { currentBlock } </h4>
      
      <div className="student-progress">
        { student.blockHistory.map((block, index) => {
            return block.slug !== 'grad' 
              ? (<div className={`block ${block.slug}`} key={index} > 
                  { block.slug.toUpperCase() } </div>)
              : (null)
        })}
      </div>

      <button id="graduate-button" onClick={handleClick} >Graduate</button>
      <button onClick={handleClick} >Delete</button>
    </div>
  )
}

export default StudentModal;
