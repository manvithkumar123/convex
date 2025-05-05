import React from 'react'
import "./android.css"
import images from "../../images/assests";
const Android = () => {
  return (
    <div className='background_download_android'>
        <div className="download_container">
            <div className="videobg_download">
                <video src={images.video} autoPlay loop muted playsInline id='download_video'></video>
            </div>
            <div className="options_container">
            <h1 style={{textAlign:"center"}}>Download Now For Android</h1>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Get the best experience by downloading our Android app today.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <a href="/path-to-your-apk.apk" download>
                <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
                  Download APK
                </button>
              </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Android
