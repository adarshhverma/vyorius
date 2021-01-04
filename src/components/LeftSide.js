import React from 'react'
import '../styles/LeftSide.css'

function LeftSide() {
    return (
        
            <div className="app__left">
            <h5 className="highlight">Connecting the disconnected</h5>
            <h1 className='mainHead'><span className="highlight">Vyorius</span> brings unmanned robots <span className="highlight">together</span>, wherever they are</h1>
            <p className='mainPara'>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re operating.
            </p>
            <div className="btn-box">
                <button id='button1'>Try  Vyorius  </button>
                <button id='button2'> Learn More</button>
            </div>
            <p >Need to order a delivery? <a href="#"> Get Started</a>
            </p>
        </div>
       
    )
}

export default LeftSide
