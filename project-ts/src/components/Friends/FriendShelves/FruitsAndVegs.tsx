import { useState, useEffect } from 'react';
import Card  from '../FriendShelves/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
//import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
//import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Modal from '../../Modal/Modal';
import styles from '../FriendShelves/FriendShelf.module.css';


const FruitsAndVegs = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
    id: number, itemName: string, itemAmount: string, itemDescription: string, image: string
  }>>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/friend-fridge"
        );
        const foods = await response.json();
        setData(foods);
        console.log(foods)
        console.log(typeof foods)
      } catch (e) {
        setError(true);
      };
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="App">
        <p className={styles.Msg}>There seems to be a problem with the server. Try again later.</p>
      </div>
    );
  }

  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      {openModal && <Modal closeModal={setOpenModal}  item="item" amount="amount" description="description" />}
      <div className={styles.container}>
        {Object.values(data).map((food) => (
          <div className={styles.card} key={food.id}>
            <img width={250} src={food.image} alt="" />
            <Card item={food.itemName} amount={food.itemAmount} description={food.itemDescription} />
          </div>
        ))}
      </div>
        

    </section>
  )
}

export default FruitsAndVegs;