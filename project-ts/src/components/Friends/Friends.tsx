import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Friends.module.css';
import { ColorRing } from 'react-loader-spinner';

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
  const [searchFriend, setSearchFriend] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://my-fridge-server.onrender.com/friends"
        );
        const users = await response.json();

        setData(users)

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
    <div className={styles.FriendList}>
      <div className={styles.search}>
        <h2 className={styles.FriendListTitle}>Search your friend's fridges!</h2>
        <input type="text" name="search" className={styles.searchInput} placeholder="🔎 Search by friend's name or diet" onChange={(event) => setSearchFriend(event.target.value)}/>
      </div>
    <div className={styles.friendsContainer}>
        {data.filter(((search: { name: string, diet:string }) => {
            if (searchFriend === "") {
              return search;
            } else {
              return search.name.toLowerCase().includes(searchFriend.toLowerCase()) || search.diet.toLowerCase().includes(searchFriend.toLowerCase())
            }     
        })).map((friend) => (
        <div className={styles.friendsCard} key={friend.id}>
          <Link to="/friends/friend" className={styles.link}><img key={friend.id} className={styles.friendsImg} src={friend.img} alt="" />
          <Friend key={friend.id} name={friend.name} diet={friend.diet} /></Link>
        </div>
        ))}
      </div>
    </div>
   );
}
 
export default Friends;