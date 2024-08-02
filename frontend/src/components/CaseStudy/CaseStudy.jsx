import React from 'react'
import './CaseStudy.css'

import code from '../../assets/code.jpg'
import comp1 from '../../assets/comp1.jpg'
import comp2 from '../../assets/comp2.jpg'

const CaseStudy = () => {
    const caseStudies = [
        {
          title: 'Robotic Automation',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reiciendis!',
          image: code,
        },
        {
          title: 'Machine Learning',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reiciendis!',
          image: comp1,
        },
        {
          title: 'Predictive Analysis',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reiciendis!',
          image: comp2,
        },
      ];
    
      return (
        
        <div className='case-study'>
            <h1>Case Study</h1>
            <h2>Explore Our Recent AI Case Studies</h2>
            <div className="case-studies-container">
                {caseStudies.map((study, index) => (
                    <div
                    key={index}
                    className="case-study-card"
                    style={{ backgroundImage: `url(${study.image})` }}
                    >
                    <div className="card-content">
                        <h3>{study.title}</h3>
                        <p>{study.description}</p>
                        <a href="#" className="details-arrow">→</a>
                    </div>
                    </div>
                ))}
            </div>
        </div>
      );
}

export default CaseStudy