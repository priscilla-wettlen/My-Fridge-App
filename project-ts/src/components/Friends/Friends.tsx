import { useEffect, useState } from 'react';
// import styles from './Friends.module.css';

type FriendsProps = {
  id?: number,
  name: string,
  age: string,
  location: string,
  diet: string,
  img?: string
}

const Friend = (props: FriendsProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.location}</p>
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
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p>Error fetching friends</p>
      </div>
    );
  }
  return ( 
    <div>
      {data.map((friend) => (
        <div>
          <img src={friend.img} alt="" />
          <Friend key={friend.id} name={friend.name} age={friend.age} location={friend.location} diet={friend.diet} />
        </div>
      )).slice(1,4)}
    </div>
   );
}
 
export default Friends;