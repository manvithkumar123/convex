import React from 'react'
import Mainnnavbar from './assets/components/navbar/Mainnavbar'
import Mainpage from './assets/components/Mainpage/Mainpage'
import About from './assets/components/About/About'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Android from './assets/components/download_android/Android';
import Apple from './assets/components/download_ios/Apple';
import Contact from './assets/components/Contact/Contact';
import Footer from './assets/components/footer/Footer';
import Chats from './assets/components/chats/Chats';
const App = () => {
  return (
    <Router>
      <Mainnnavbar/>
      <Routes>
      <Route path="/" element={<Mainpage />} />
        <Route path="/home" element={<Mainpage />} />
        <Route path='/apple/download' element={<Apple />} />
        <Route path='/android/download' element={<Android />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chats/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
