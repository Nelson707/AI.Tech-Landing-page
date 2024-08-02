import React, { useState } from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'

const Hero = () => {

    const [menu,setMenu] = useState("home");

  return (
    <div className='hero'>

        <div className='navbar'>
            <div className="nav-left">
                <h1>AI.Tech</h1>
            </div>
            <div className="nav-right">
                <ul>
                    <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                    <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</li>
                    <li onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>Services</li>
                    <li onClick={()=>setMenu("projects")} className={menu==="projects"?"active":""}>Projects</li>
                    <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
                </ul>
            </div>
        </div>

        <div className="header">
            <div className="header-left">
                <h2>Artificial Intelligence <br/> for your business</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cum maxime aliquid illo? Modi incidunt porro necessitatibus, quasi explicabo corrupti?</p>
                <button>Contact</button>
            </div>
            <div className="header-right">
                <img src={assets.robothead} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero