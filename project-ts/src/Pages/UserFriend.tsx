import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FriendBio from '../components/Friends/FriendBio';
import FriendShelf from '../components/Friends/FriendShelves/FriendShelf';
import { FriendsProps } from '../components/Friends/Friends'
import styles from '../components/Friends/Friends.module.css';
import { ColorRing } from 'react-loader-spinner';

const UserFriend = (props: FriendsProps) => {
  const [data, setData] = useState<Array<FriendsProps>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/priscilla-silva/FoodsAPI/users`
        );
        const users = await response.json();

        setData(users)
        console.log(users)

      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.Loader}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#80C342', '#66BC46', '#47B649', '#118B44', '#118B44']}
        />
        <p className={styles.Msg}>Loading friends...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p className={styles.Msg}>There seems to be a problem with the server. Try again later.</p>
      </div>
    );
  }



  return ( 
    <div className="App">
      {data.filter((user, index) => user.id.toString() === id).map(user => 
        <FriendBio key={user.id} name={user.name} city={user.location} diet={user.diet} bio={`${user.name}💁🏼‍♀️ ${user.age} years old🥳 Love food🥕🍉but hate food waste😒🙅🏼‍♀️`} />
        )}
      
      <FriendShelf />
    </div>
   );
}
 
export default UserFriend;