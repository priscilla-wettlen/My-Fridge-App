import { useState, useEffect } from 'react';
import CardFV from '../Cards/CardFV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
//import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
//import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ModalFV from '../Modal/ModalFV';
import styles from './Shelf.module.css';

const FruitsAndVegs = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
   id:string, itemName: string, itemAmount: string, itemDescription: string, image: string
  }>>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/fruits-vegs'
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
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      <FontAwesomeIcon icon={faPlusCircle} className={styles.plusCircle} onClick={() => setOpenModal(true)} />
      {openModal && <ModalFV closeModal={setOpenModal} id="id" itemName="itemName" itemAmount="itemAmount" itemDescription="itemDescription" />}
      <div className={styles.container}>
        {Object.values(data).map((food,index) => (
          <div className={styles.card} key={index}>
            <img width={250} src={food.image} alt="" />
            <CardFV id={food.id} itemName={food.itemName} itemAmount={food.itemAmount} itemDescription={food.itemDescription} />
          </div>
        ))}
      </div>
        

    </section>
  )
};

export default FruitsAndVegs;
