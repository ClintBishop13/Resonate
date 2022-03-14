import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Level200 from './components/pages/Level200';
import Contacts from './components/pages/Contacts';
import ViewContact from './components/pages/ViewContact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Level200" element={<Level200/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/ViewContact/:contactId" element={<ViewContact/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
