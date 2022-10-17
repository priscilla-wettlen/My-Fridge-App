import { useState, useEffect } from 'react';
import CardFV from '../Cards/CardFV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ModalFV from '../Modal/ModalFV';
import styles from './Shelf.module.css';

const FruitsAndVegs = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
   _id:string, itemName: string, itemAmount: string, itemDescription: string, image: string
  }>>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fridge-mongodb.herokuapp.com/api/fruit-veg'
        );
        const foods = await response.json();
        setData(foods);
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
      <div className={styles.titleAndBtn}>
        <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
        <button className={styles.addItemBtn} onClick={() => setOpenModal(true)}><FontAwesomeIcon icon={faPlusCircle} /> Add item</button>
        {openModal && <ModalFV closeModal={setOpenModal} id="id" itemName="itemName" itemAmount="itemAmount" itemDescription="itemDescription" />}
      </div>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} />
        {data && data.map((food) => (
            <div className={styles.card} key={food._id}>
              <img width={250} src={food.image} alt="" />
              <CardFV id={food._id} itemName={food.itemName} itemAmount={food.itemAmount} itemDescription={food.itemDescription} />
            </div> 
        ))}
        <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} />
      </div>
    </section>
  )
};

export default FruitsAndVegs;
