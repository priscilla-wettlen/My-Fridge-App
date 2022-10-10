import { useState, useEffect } from 'react';
import  Card  from './Card';
import ModalReady from '../Modal/ModalReady';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
//import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
//import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './Shelf.module.css';

const ReadyToEat = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
    id?:number, itemName: string, itemAmount:string, itemDescription:string, image:string}>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:8000/ready-eat"
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
      <h3 className={styles.sectionTitle}>Miscellaneous</h3>
      <FontAwesomeIcon icon={faPlusCircle} className={styles.plusCircle} onClick={() => setOpenModal(true)} />
      {openModal && <ModalReady closeModal={setOpenModal} itemName="item" itemAmount="amount" itemDescription="description" />}
      <div className={styles.container}>
        {Object.values(data).map((food) => (
          <div className={styles.card} key={food.id}>
            <img width={250} src={food.image} alt="" />
            <Card id={food.id} item={food.itemName} amount={food.itemAmount} description={food.itemDescription} />
          </div>
        ))}
      </div>
      </section>
  )
}

export default ReadyToEat;