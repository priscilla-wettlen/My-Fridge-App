import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import FriendList from './Pages/FriendList';
import User from './Pages/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
          <Route path="/friends" element={<FriendList />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
