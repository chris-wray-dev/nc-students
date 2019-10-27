import React from 'react';
import './Component-styles/Blocks.css';
import StudentCard from './StudentCard';
import { getStudentById, getStudentsByBlock, deleteStudentById } from '../api';
import Modal from 'react-modal';
import StudentModal from './StudentModal';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    backgroundColor       : '#282c34',
    width                 : '80vw',
    maxWidth              : '800px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '15px'
  }
};

class Blocks extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      isLoading: true,
      modalIsOpen: false,
      modalStudent: {},
      currentBlock: '',
      filteredBlock: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(student_id, currentBlock) {
    getStudentById(student_id).then(({ student }) => {
      this.setState({
        modalIsOpen: true,
        addNewStudent: false,
        modalStudent: student,
        currentBlock: currentBlock
      });
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  afterUpdateBlock = () => {
    this.setState({ isLoading: true });
    getStudentsByBlock(this.state.filteredBlock)
      .then(({ students }) => {
        this.setState({ students: students, isLoading: false });
      })
  };

  componentDidMount = () => {
    getStudentsByBlock(this.state.filteredBlock)
      .then(({ students }) => {
        this.setState({ students: students, isLoading: false });
      })
  }

  handleClick = (event) => {
    const block = event.target.id || '';
    getStudentsByBlock(block)
      .then(({ students }) => {
        this.setState({ students: students, isLoading: false, filteredBlock: block });
      })
  }

  deleteStudent = student_id => {
    this.closeModal();
    this.setState({ isLoading: true });
    deleteStudentById(student_id).then(response => {
      this.componentDidMount();
    });
  };

  render() {
    return (
      
      <div className="blocks-container">
        <h2>Blocks</h2>
        <div className="buttons-container">
          <h4 id="fun" className="block-button fundamentals" onClick={ this.handleClick } >Fundamentals</h4>
          <h4 id="be" className="block-button back-end" onClick={ this.handleClick } >Back End</h4>
          <h4 id="fe" className="block-button front-end" onClick={ this.handleClick } >Front End</h4>
          <h4 id="proj" className="block-button project" onClick={ this.handleClick } >Project Phase</h4>
          <h4 id="" className="block-button all" onClick={ this.handleClick } >All Blocks</h4>
        </div>
        <h3>Total : { this.state.students.length }</h3>
      

      <div className="student-list-container">
        { this.state.isLoading ? <p>loading...</p> : this.state.students.map(student => {
          return (
            <StudentCard key={ student.name } student={ student } openModal={ this.openModal }/>
          )
        })}
      </div>

      <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Student Modal"
        >
          <StudentModal
            student={this.state.modalStudent}
            currentBlock={this.state.currentBlock}
            deleteStudent={this.deleteStudent}
            afterUpdateBlock={this.afterUpdateBlock}
          />
        </Modal>
      </div>
    )
  }
}

export default Blocks