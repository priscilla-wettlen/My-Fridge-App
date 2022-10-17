import './App.css';
import Guest from './components/Header/Guest';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import SignUp from './components/Home/SignUp'
import FriendList from './Pages/FriendList';
import UserFriend from './Pages/UserFriend';
import Home from './components/Home/Home';
import User from './Pages/User';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {ContextLogin} from './components/Home/ContextLogin'


function App() {

    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fridge" element={<User />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="friends/:friend" element={<UserFriend />} />
        </Routes>
        <Footer />
      </Router>
    )
  }


export default App;
