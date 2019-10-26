import React from 'react';
import './Component-styles/Navbar.css'

const Navbar = () => {
  return(
    <div className="navbar-container">
      <a href="/">Home</a>
      <a href="/students">Student List</a>
      <a href="/blocks">Blocks</a>
      <a href="/cohorts">Cohorts</a>
    </div>
  )
}

export default Navbar