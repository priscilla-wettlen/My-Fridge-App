import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Friend from './Pages/Friend';
import User from './Pages/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
          <Route path="/friends" element={<Friend />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
