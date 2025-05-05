import React from 'react'
import images from "../../images/assests";
import "./apple.css"

const Apple = () => {
  return (
    <div className='background_download_ios'>
         <div className="download_container_ios">
         <div className="videobg_download_ios">
         <video src={images.video} autoPlay loop muted playsInline id='download_video_ios'></video>
         </div>
         <div className="options_container_ios">
            <h1 style={{textAlign:"center"}}>Download Now For Apple devices</h1>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Get the best experience by downloading our IPA app today.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <a href="/path-to-your-apk.apk" download>
                <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
                  Download IPA
                </button>
              </a>
            </div>
            </div>
         </div>
    </div>
  )
}

export default Apple
