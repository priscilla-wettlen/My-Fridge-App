import Header from './components/Header/Header';
import FriendBio from './components/Bio/FriendBio';
import Shelf from './components/Shelves/Shelf';

function Friend() {
  return (
    <div className="App">
      <Header />
      <FriendBio />
      <Shelf />
     </div>
  );
}

export default Friend;