import React from 'react'
import './Services.css'
import { assets } from '../../assets/assets'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-left">
            <h1>Our Services</h1>
            <h2>Our Excellent AI Solutions for Your Business</h2><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In saepe provident totam earum! Tempora eveniet nesciunt quos odit a, dolorem culpa possimus quasi laboriosam dicta sit veritatis accusantium quod praesentium at necessitatibus ab nam blanditiis impedit deleniti vitae aliquam animi.</p>
            <button>Read More</button>
        </div>

        <div className="services-right">
            <div className="services-container">
                <div className="service-card">
                    <div className="icon-container">
                        <img src={assets.ai} alt="Predictive Analytics Icon"/>
                    </div>
                    <h3>Predictive Analytics</h3>
                    <p>Transform data into actionable insights to drive strategic decisions.</p>
                    <button>Learn More</button>
                </div>
                <div className="service-card">
                    <div className="icon-container">
                        <img src={assets.ai} alt="AI Customer Service Icon"/>
                    </div>
                    <h3>AI-Powered Customer Service</h3>
                    <p>Enhance customer experience with intelligent chatbots and virtual assistants.</p>
                    <button>Learn More</button>
                </div>
                <div className="service-card">
                    <div className="icon-container">
                        <img src={assets.ai} alt="Process Automation Icon"/>
                    </div>
                    <h3>Process Automation</h3>
                    <p>Automate repetitive tasks to improve efficiency and reduce costs.</p>
                    <button>Learn More</button>
                </div>
                <div className="service-card">
                    <div className="icon-container">
                        <img src={assets.ai} alt="Process Automation Icon"/>
                    </div>
                    <h3>Custom AI Solutions</h3>
                    <p>Tailored AI solutions to meet your unique business needs.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Services