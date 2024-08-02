import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={assets.robohead} alt="" />
        </div>
        <div className="about-right">
            <h1>About Us</h1>
            <h2>We Make Your Business Smarter with Artificial Intelligence</h2><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In saepe provident totam earum! Tempora eveniet nesciunt quos odit a, dolorem culpa possimus quasi laboriosam dicta sit veritatis accusantium quod praesentium at necessitatibus ab nam blanditiis impedit deleniti vitae aliquam animi.</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default AboutUs