import React from 'react'
import "./about.css"
import images from '../../images/assests'

const About = () => {
  return (
    <div style={{marginTop:"40px"}}>
      <div className="video_bg1">
        <video src={images.video} id='video' playsInline loop muted autoPlay></video>
      </div>
      <div className="about_container" style={{marginTop:"20px"}}>
      <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title" style={{textDecoration:"underline"}}>What the app does</h5>
    <p className="card-text">
    Nowadays, we see many chatting platforms that help people connect easily. ConvoX is also one such application designed for seamless communication. It currently supports basic chat features and aims to grow by adding more advanced functionality in future updates.
    
    </p>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title" style={{textDecoration:"underline"}}>Why it exists / problem it solves</h5>
    <p className="card-text">
    ConvoX is a free chat application built to offer a simple and user-friendly experience.
  While many other platforms exist, ConvoX stands out with its minimalistic UI that is easy
  to navigate and understand — making it accessible to everyone, even first-time users.
    </p>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title" style={{textDecoration:"underline"}}>Who it’s for</h5>
    <p className="card-text">
    ConvoX is designed for anyone who enjoys basic, straightforward chatting — from children to elderly users.
  Its clean interface and easy-to-use features make it perfect for casual conversations without complexity.
  - Students looking to stay in touch with friends<br />
  - Families wanting to stay connected across generations<br />
    </p>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <div className="card-body" >
    <h5 className="card-title" style={{textDecoration:"underline"}}>Tech Stack</h5>
    <p className="card-text">
      - <strong>React.js</strong> for building the dynamic user interface<br />
      - <strong>HTML & CSS</strong> for structure and styling<br />
      - <strong>Node.js</strong> for handling server-side logic<br />
      - <strong>Firebase by Google</strong> for backend services like authentication and database<br />
      <br />
    </p>
  </div>
  </div>
  </div>
    </div>
  )
}

export default About
