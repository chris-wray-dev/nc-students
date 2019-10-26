import React from 'react';
import { getAllStudents, getStudentById, postNewStudent } from '../api';
import StudentCard from './StudentCard';
import Modal from 'react-modal';
import './Component-styles/StudentList.css';
import StudentModal from './StudentModal';
import AddNewStudent from './AddNewStudent';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    backgroundColor       : '#282c34',
    width                 : '80vw',
    maxWidth              : '800px',
    height                : '85vh',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '15px'
  }
};

class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
        students: [],
        isLoading: true,
        modalIsOpen: false,
        modalStudent: {},
        addNewStudent: false
      }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(student_id) {
    getStudentById(student_id)
      .then(({ student }) => {
        this.setState({ modalIsOpen: true, modalStudent: student })
      })
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
 
  componentDidMount() {
    getAllStudents()
      .then(({ students }) => {
        this.setState({ students: students, isLoading: false });
      })
  }

  sortStudents = (key, order) => {
    this.setState({ isLoading: true })
    getAllStudents(key, order)
      .then(({ students }) => {
        this.setState({ students: students, isLoading: false });
      })
  }

  openAddStudentModal = () => {
    this.setState({ modalIsOpen: true, addNewStudent: true });
  }

  addNewStudent = (student) => {
    student.startingCohort = parseInt(student.startingCohort);
    this.closeModal();
    this.setState({ isLoading: true });
    postNewStudent(student)
      .then(({ student }) => {
        this.setState({ students: [student, ...this.state.students], isLoading: false, addNewStudent: false });
    })
  }

  render() {
    return (
      <div className="student-list">
        <h2>Student List</h2>
        <div className="student-list-options">
          <i className="fas fa-2x fa-user-plus" onClick={ this.openAddStudentModal }/>
          <i className="fas fa-2x fa-sort-numeric-up" onClick={ () => this.sortStudents('startingCohort', 'asc') }/>
          <i className="fas fa-2x fa-sort-numeric-down" onClick={ () => this.sortStudents('startingCohort', 'desc') }/>
          <i className="fas fa-2x fa-sort-alpha-up" onClick={ () => this.sortStudents('name', 'asc') }/>
          <i className="fas fa-2x fa-sort-alpha-down" onClick={ () => this.sortStudents('name', 'desc') }/>
        </div>
        <div className="student-list-container">
          { this.state.isLoading ? <p>loading...</p> : this.state.students.map(student => {
            return (
              <StudentCard key={ student.name } student={ student } openModal={ this.openModal }/>
            )
          })}
        </div>
        <Modal 
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          style={ customStyles }
          contentLabel="Student Modal"
        >

          { this.state.addNewStudent 
            ? <AddNewStudent addNewStudent={ this.addNewStudent }/>
            : <StudentModal student={ this.state.modalStudent }/> }

        </Modal>
      </div>
    )
  }
}

export default StudentList