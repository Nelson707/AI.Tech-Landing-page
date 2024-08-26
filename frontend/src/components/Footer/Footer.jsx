import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>We are a leading company in our field, committed to providing quality services.</p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#about">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: aitech@gmail.com</p>
        <p>Phone: +254 710 517 189</p>
        <p>Address: 123 Street, Nairobi, Kenya</p>
      </div>
    </footer>
  )
}

export default Footer