import React from 'react'
import images from "../../images/assests";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
  © 2025 ConvoX. All rights reserved.
  <div className="main">
        <ul>
            <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" style={{cursor:"pointer"}}/></svg></a></li>
            <li><a href="https://github.com/manvithkumar123"><img src={images.github_logo} alt=""style={{filter:"invert(1)",height:"25px",width:"25px",marginLeft:'15px',cursor:"pointer"}} /></a></li>
            <li><a href="https://www.linkedin.com/in/manvith-kumar-b38604358/"><img src={images.linkedin_logo} alt="" style={{filter:"invert(1)",height:"30px",width:"30px",marginLeft:'15px',cursor:"pointer"}}/></a></li>
        </ul>
        </div>
</footer>
  )
}

export default Footer
