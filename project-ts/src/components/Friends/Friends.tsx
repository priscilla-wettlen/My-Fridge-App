import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Friends.module.css';

type FriendsProps = {
  id?: number,
  name: string,
  location?: string,
  diet: string,
  img?: string
}

const Friend = (props: FriendsProps) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.diet}</p>
    </div>
  )
}

const Friends = () => {
  const [data, setData] = useState<Array<FriendsProps>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/priscilla-silva/FoodsAPI/users"
        );
        const users = await response.json();

        setData(users);
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
      <div className="App">
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
    <div className={styles.FriendList}>
      <h2 className={styles.FriendListTitle}>Search your friend's fridges!</h2>
    <div className={styles.friendsContainer}>
      {data.map((friend) => (
        <div className={styles.friendsCard}>
          <Link to="/friends/friend" className={styles.link}><img key={friend.id} className={styles.friendsImg} src={friend.img} alt="" />
          <Friend key={friend.id} name={friend.name} diet={friend.diet} /></Link>
        </div>
      )).slice(1)}
      </div>
    </div>
   );
}
 
export default Friends;