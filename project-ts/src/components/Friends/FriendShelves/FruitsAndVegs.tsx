import { useState, useEffect } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Modal from '../../Modal/Modal';
import styles from '../FriendShelves/FriendShelf.module.css';


const FruitsAndVegs = () => {
  const [openModal, setOpenModal] = useState(false)
  let [data, setData] = useState<Array<{
    id: number, itemName: string, itemAmount: string, itemDescription: string, image: any
  }>>([]);
  const [error, setError] = useState(false); 
  const [filteredCards, setFilteredCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-fridge-server.onrender.com/friend-fridge"
        );
        const foods = await response.json();
        setData(foods);
        setFilteredCards(foods)
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

  const handlePrev = () => {setFilteredCards(data.slice(0, 4))}
  const handleNext = () => {setFilteredCards(data.slice(1,5))}

  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      {openModal && <Modal closeModal={setOpenModal} image="image" item="item" amount="amount" description="description" />}
      <div className={styles.container}>
        <>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={handlePrev} />
          {filteredCards.map((food) => (
          <div className={styles.card} key={food.id}>
            <img width={250} src={food.image} alt="" />
            <Card image={food.image} item={food.itemName} amount={food.itemAmount} description={food.itemDescription} />
          </div>
        )).slice(0,4)}
          <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={handleNext} />
        </>
      </div>
    </section>
  )
}

export default FruitsAndVegs;