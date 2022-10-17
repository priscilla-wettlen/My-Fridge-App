import { useState, useEffect } from 'react';
import  CardMisc  from '../Cards/CardMisc';
import ModalReady from '../Modal/ModalReady';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Shelf.module.css';

const ReadyToEat = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
    _id:string, itemName: string, itemAmount:string, itemDescription:string, image:string}>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://fridge-mongodb.herokuapp.com/api/misc'
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
      <div className={styles.titleAndBtn}>
        <h3 className={styles.sectionTitle}>Miscellaneous</h3>
        <button className={styles.addItemBtn} onClick={() => setOpenModal(true)}><FontAwesomeIcon icon={faPlusCircle} /> Add item</button>
        {openModal && <ModalReady closeModal={setOpenModal} id="id" itemName="itemName" itemAmount="itemAmount" itemDescription="itemDescription" />}
      </div>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} />
        {Object.values(data).map((food) => (
          <div className={styles.card} key={food._id}>
            <img width={250} src={food.image} alt="" />
            <CardMisc id={food._id} itemName={food.itemName} itemAmount={food.itemAmount} itemDescription={food.itemDescription} />
          </div>
        ))}
        <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} />
      </div>
      </section>
  )
}

export default ReadyToEat;