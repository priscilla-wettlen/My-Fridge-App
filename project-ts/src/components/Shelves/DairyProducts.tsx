import { useState, useEffect } from 'react';
import CardDairy  from '../Cards/CardDairy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
//import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
//import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ModalDairy from '../Modal/ModalDairy';
import styles from './Shelf.module.css';

const DairyProducts = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
    id:string, itemName: string, itemAmount:string, itemDescription:string, image:string}>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'http://localhost:3000/dairy'
        );
        const foods = await response.json();
        setData(foods);
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
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Dairy</h3>
      <FontAwesomeIcon icon={faPlusCircle} className={styles.plusCircle} onClick={() => setOpenModal(true)} />
      {openModal && <ModalDairy closeModal={setOpenModal} id="id" itemName="item" itemAmount="amount" itemDescription="description" />}
      <div className={styles.container}>
        {Object.values(data).map((food, index) => (
          <div className={styles.card} key={index}>
            <img width={250} src={food.image} alt="" />
            <CardDairy id={food.id} itemName={food.itemName} itemAmount={food.itemAmount} itemDescription={food.itemDescription} />
          </div>
        ))}
      </div>
      </section>
  )
}

export default DairyProducts;