import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import StudentList from './Components/StudentList';
import HomePage from './Components/HomePage';
import Blocks from './Components/Blocks';
import Cohorts from './Components/Cohorts';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <HomePage path="/" />
        <StudentList path="/students" />
        <Blocks path="/blocks" />
        <Cohorts path="cohorts" />
      </Router>
    </div>
  );
}

export default App;
