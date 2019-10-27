import React from 'react';
import './Component-styles/StudentModal.css'
import GraphOfBlocks from './GraphOfBlocks';
import { patchStudentBlock } from '../api';

class StudentModal extends React.Component {
  state = {
    student: this.props.student,
    currentBlock: this.props.currentBlock
  }

  handleClick = (event) => {
    if (event.target.id === 'graduate-button') {
      patchStudentBlock(this.state.student._id, true)
        .then(({ student }) => {
          this.setState( {
            student: student,
            currentBlock: student.blockHistory[student.blockHistory.length - 1].name
          });
          this.props.afterUpdateBlock();
        })
        .catch(err => console.log(err));
      
    }
    if (event.target.id === 'resit-button') {
      patchStudentBlock(this.state.student._id, false)
        .then(({ student }) => {
          this.setState( {
            student: student,
            currentBlock: student.blockHistory[student.blockHistory.length - 1].name
          });
          this.props.afterUpdateBlock();
        })
        .catch(err => console.log(err));
    }

    if (event.target.id === 'delete-button') {
      this.props.deleteStudent(this.state.student._id);
    }
    
  }
   render() {
    return (
        <div className="student-details-container">
          <h1> { this.state.student.name }</h1>
          <h2> Current Block : { this.state.currentBlock } </h2>
          <hr/>
          <GraphOfBlocks blockHistory={ this.state.student.blockHistory }/>
          <div className="button-container">
            { this.state.currentBlock !== 'Graduated' 
              ? <>
              <h4 id="graduate-button" 
                  className={`${this.state.student.blockHistory[this.state.student.blockHistory.length - 1].slug}`}
                  onClick={ this.handleClick } >
                <i className="fas fa-2x fa-user-graduate"></i>
                Graduate { this.state.currentBlock }
              </h4>

              <h4 id="resit-button" 
                  className={`${this.state.student.blockHistory[this.state.student.blockHistory.length - 1].slug}`}
                  onClick={ this.handleClick } >
                <i className="fas fa-2x fa-undo"></i>
                Re-sit { this.state.currentBlock }
              </h4>
              </>
              : null
            }

            <h4 id="delete-button" onClick={ this.handleClick } >
              <i className="fas fa-2x fa-user-times"></i>
              Delete { this.state.student.name }
            </h4>
            
          </div>
        </div>
      )
   }
  
}

export default StudentModal;
