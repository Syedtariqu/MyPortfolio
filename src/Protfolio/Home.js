import React from 'react'
import "./Footer.css"
import image from '../assets/Home/shape-bg.png';
import Profile from './Profile'
import "./Home.css"
import NavBar from './NavBar'

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <Profile />
      <div className='footer-container'>
        <div className="footer-parent">
          <img src={image} />
        </div>
      </div>

    </div>
  )
}

export default Home