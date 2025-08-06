// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Bridge from './Components/Bridge';
import ScrollToTop from './Components/ScroolTop';
import Airport from './Components/Airport';
import Dams from './Components/Dams';
import Defence from './Components/Defence';
import Media from './Components/Media';
import Contact from './Components/Contact';
import Ourstories from './Components/Ourstories';
import Services from './Components/Services';
import Awards from './Components/Awards';
function EmptyPage({ name }) {
  return (
    <div style={{margin:100, padding: 32, fontSize: 24, textAlign: 'center' }}>
      {name} Page
    </div>
  );
}

function App() {

  return (
    
    <div className="App">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/we-build/bridges" element={<Bridge />} />
        <Route path="/we-build/dams" element={<Dams />} />
        <Route path="/we-build/airports" element={<Airport />} />
        <Route path="/we-build/defence" element={<Defence />} />
        <Route path="/who-we-are/stories" element={<Ourstories />} />
        <Route path="/who-we-are/records" element={<Awards />} />
       
        
        <Route path="/services" element={<Services />} />
       
        <Route path="/projects/iconic" element={<EmptyPage name="Iconic Projects" />} />
        <Route path="/projects/landmark" element={<EmptyPage name="Landmark Projects" />} />
        
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
