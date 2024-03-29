import { useState, useEffect } from 'react';
import  CardMisc  from '../Cards/CardMisc';
import ModalReady from '../Modal/ModalReady';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Shelf.module.css';
import { ColorRing } from 'react-loader-spinner';

const ReadyToEat = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<Array<{
    _id:string, itemName: string, itemAmount:string, itemDescription:string, image:string}>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredCards, setFilteredCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://fridge-mongodb.onrender.com/api/misc'
        );
        const foods = await response.json();
        setData(foods);
        setFilteredCards(foods)
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
        <p className={styles.Msg}>Loading foods...</p>
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

  const handlePrev = () => { setFilteredCards(data.slice(0, 4)) }
  const handleNext = () => { setFilteredCards(data.slice(1, 5)) }


  if (Object.keys(filteredCards).length > 0) {
   return(
    <section className={styles.shelf}>
      <div className={styles.titleAndBtn}>
        <h3 className={styles.sectionTitle}>Miscellaneous</h3>
        <button className={styles.addItemBtn} onClick={() => setOpenModal(true)}><FontAwesomeIcon icon={faPlusCircle} /> Add item</button>
        {openModal && <ModalReady closeModal={setOpenModal} id="id" itemName="itemName" itemAmount="itemAmount" itemDescription="itemDescription" image={''} />}
       </div>
       <h3 className={styles.foodHero}>Hooray! You have rescued {data.length} ready to eat items today!🦸‍♀️</h3>
      <div className={styles.container}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={handlePrev} />
        {filteredCards && filteredCards.map((food) => (
            <div className={styles.card} key={food._id}>
              <img width={250} src={food.image} alt="" />
              <CardMisc id={food._id} itemName={food.itemName} itemAmount={food.itemAmount} itemDescription={food.itemDescription} />
            </div> 
        )).slice(0,4)}
        <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={handleNext} />
      </div>
    </section>
  )
  }
  
  if (Object.keys(filteredCards).length === 0) {
    return(
    <section className={styles.shelf}>
      <div className={styles.titleAndBtn}>
        <h3 className={styles.sectionTitle}>Miscellaneous</h3>
        <button className={styles.addItemBtn} onClick={() => setOpenModal(true)}><FontAwesomeIcon icon={faPlusCircle} /> Add item</button>
        {openModal && <ModalReady closeModal={setOpenModal} id="id" itemName="itemName" itemAmount="itemAmount" itemDescription="itemDescription" image={''} />}
      </div>
      <div className={styles.container}>
          <p className={styles.empty}>Your shelf is empty 😞 Click on "Add item" to add some foods!</p>

      </div>
    </section>
  )
}
}

export default ReadyToEat;