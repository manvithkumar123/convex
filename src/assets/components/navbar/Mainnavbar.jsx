import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import "./navbar.css"
import images from "../../images/assests";

const Mainnavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-0000-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={images.logo_text} alt="" id='logo'/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page" href="#" style={{textDecoration:'none'}}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Download
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to='/android/download'className="dropdown-item" href="#">
                Android
              </Link>
            </li>
            <li>
              <Link to='/apple/download'className="dropdown-item" href="#">
                Ios
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to='/Contact' className="nav-link" href="#">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <span
            className="nav-link"
            role="button"
            onClick={() => {
              if (isAuthenticated) {
                navigate('/chat');
              } else {
                alert("Please sign in first!");
              }
            }}
          >
            Chats
          </span>
        </li>
      </ul>
      <div className="main">
        <ul>
            <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z" style={{cursor:"pointer"}}/></svg></a></li>
            <li><a href="https://github.com/manvithkumar123"><img src={images.github_logo} alt=""style={{filter:"invert(1)",height:"25px",width:"25px",marginLeft:'15px',cursor:"pointer"}} /></a></li>
            <li><a href="https://www.linkedin.com/in/manvith-kumar-b38604358/"><img src={images.linkedin_logo} alt="" style={{filter:"invert(1)",height:"30px",width:"30px",marginLeft:'15px',cursor:"pointer"}}/></a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Mainnavbar
