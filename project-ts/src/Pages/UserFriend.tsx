import FriendBio from '../components/Friends/FriendBio';
import FriendShelf from '../components/Friends/FriendShelves/FriendShelf';

const UserFriend = () => {
  return ( 
    <div className="App">
      <FriendBio name="Madonna Ciccone" city="Los Angeles, CA" diet="Vegan" bio="Madonna💁🏼‍♀️65 years old🥳Vegan because I love animals🐮🐷🥕🍉but hate food waste😒🙅🏼‍♀️" />
      <FriendShelf />
    </div>
   );
}
 
export default UserFriend;