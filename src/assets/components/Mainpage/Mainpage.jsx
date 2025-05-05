import React, { useState, useEffect } from 'react'
import { auth } from "../../../firebaseConfig";
import "./mainpage.css"
import { useNavigate, Link } from 'react-router-dom';
import images from "../../images/assests";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut ,signInAnonymously, createUserWithEmailAndPassword} from 'firebase/auth';
const Mainpage = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Set the user state if logged in
    });
    return () => unsubscribe();  // Clean up the listener on component unmount
  }, []);

  const handlelogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        navigate("/chat");  // Redirect to /chat after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Login failed: " + errorMessage);  // Show the error message
      });
  };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        alert("Signup successful!");
        navigate("/chat");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      alert("Logged out!");
    });
  };
  const guest=()=>{
    signInAnonymously(auth).then(()=>{
      alert("login sucessful!")
      navigate("/chat")
    })
  };
  return (
    <div >
      {user ? (
        <div className='message' style={{ position: 'relative' ,marginLeft:"auto"}}>
          <img src={images.message} alt="" style={{ height: '180px', width: '100%', objectFit: 'cover',marginLeft:'auto' }} />
          <img src={images.ironman} alt="" style={{height:"50px",position:"absolute",top:'20',right:"20px"}}/>
          <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}>
         <p style={{fontSize:'15px'}}>Welcome, <br />{user.isAnonymous ? "Guest" : user.email}</p>
         {user && <p style={{ color: 'white', fontWeight: 'bold' }}>User ID: {user.uid}</p>}
            <button id='logout' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : null}
    <div>
        <div className="welcome_text_container">
      <h1 id='welcome_text'>“Connect, Share, and Thrive – Welcome to ConvoX, Where Every Conversation Finds Its Voice.”</h1>

      <p className="subtitle">Ready to chat with new technology – fast, secure, and smarter than ever.</p>
      </div>
      <div className="login_container">
        <div className="entryarea"><input type="text" required value={email} onChange={(e) =>setemail(e.target.value) }/><div className="lableline">Enter Mail Id</div></div>
        <div className="entryarea"><input type="password" required value={password} onChange={(e)=>setpassword(e.target.value)}/><div className="lableline">Enter Password</div></div>
        <div className="buttons">
        <button id='login_button' onClick={handlelogin}>Login!</button>
        <button id='login_button' onClick={guest}>Guest</button>
        {user ?(
          <button id='login_button'><Link to={"/chat"} style={{color:"white",textDecoration:"none"}}>Get Started!
          </Link></button>
        ):null}
        </div>
        {showSignup && (
          <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: "gray",
              padding: "0px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              width: "90%",
              maxWidth: "400px"
            }}>
              <div className="entryarea">
                <input style={{border:"2px solid white"}}
                  type="text"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
                <div className="lableline">Enter Email for Signup</div>
              </div>
              <div className="entryarea">
                <input style={{border:"2px solid white"}}
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
                <div className="lableline" >Enter Password for Signup</div>
              </div>
              <div className="buttons" style={{marginTop:"50px",paddingLeft:'50px'}}>
                <button id="signup_button" style={{width:"90px",height:"40px",borderRadius:"10px"}} onClick={handleSignup}>Signup</button>
                <button style={{width:"90px",height:"40px",borderRadius:"10px"}} onClick={() => setShowSignup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        <div className="signup" style={{textAlign:"center"}}>
          Don't have an account? <span style={{textDecoration:'underline',color:'blue',cursor:"pointer"}} onClick={() => setShowSignup(true)}>Signup</span>
        </div>
      </div>
      </div>
    </div>
          
  );
}
export default Mainpage
