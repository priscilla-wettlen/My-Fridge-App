import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import SignUp from './components/Home/SignUp'
import FriendList from './Pages/FriendList';
import UserFriend from './Pages/UserFriend';
import Home from './components/Home/Home';
import User from './Pages/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
