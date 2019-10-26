import React from 'react';
import northcoders from '../resources/northcoders.png';
import './Component-styles/HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h2>Homepage</h2>
      <img className="northcoders-logo" src={northcoders} alt="northcoders logo"/>
    </div>
  )
}

export default HomePage