import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import FriendList from './Pages/FriendList';
import UserFriend from './Pages/UserFriend';
import Login from './components/Home/Login';
//import User from './Pages/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="friends/:friend" element={<UserFriend />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
