import React from 'react'
import "./contact.css"
import images from "../../images/assests";

const Contact = () => {
  return (
    <div>
      <div className="container_details">
        <div className="contact_card">
          <div className="profile_bg"><img src={images.creator} alt="" /></div>
          <div className="detail_container">
          <h1 style={{textAlign:"center",fontWeight:"700"}}>Manvith Kumar</h1>
          <p style={{textAlign:"center"}}>  Hi! I'm Manvith, a BTech CSE student <br />and passionate developer</p>
          <p className="text-lg text-gray-700 mb-2" style={{textAlign:"center"}}>
        This project was built using React.js <br /> with love for learning and innovation.
      </p>
      <p className="text-lg text-gray-700" style={{textAlign:"center"}} >
        Feel free to connect with me at: <a href="mailto:m6783321@email.com" className="text-blue-500 underline">m6783321@email.com</a>
      </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
