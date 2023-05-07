import { useState, useEffect} from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Modal from '../../Modal/Modal';
import styles from '../FriendShelves/FriendShelf.module.css';
import { ColorRing } from 'react-loader-spinner';



const FruitsAndVegs = () => {
  const [openModal, setOpenModal] = useState(false)
  let [data, setData] = useState<Array<{
    id: number, itemName: string, itemAmount: string, itemDescription: string, image: any, requested:string
  }>>([]);
  const [error, setError] = useState(false);
  const [filteredCards, setFilteredCards] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          "https://my-fridge-server.onrender.com/friend-fridge"
        );
        const foods = await response.json();
        setData(foods);
        setFilteredCards(foods)
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false)
      }
    }
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
  
  const handlePrevTab = () => { setFilteredCards(data.slice(0, 2)) }
  const handleNextTab = () => { setFilteredCards(data.slice(2, 4)) }
  
  const handlePrevMob = () => { setFilteredCards(data.slice(0, 1)) }
  const handleNextMob = () => { setFilteredCards(data.slice(1,2)) }
  
  const mediaQuery = window.matchMedia('(min-width: 821px)')
  const mediaQueryTab = window.matchMedia('(max-width: 820px)')
  const mediaQueryMob = window.matchMedia('(max-width: 400px)')

  if (mediaQuery.matches) {
    return (
      <section className={styles.shelf}>
        <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
        {openModal && <Modal closeModal={setOpenModal} image="image" item="item" amount="amount" description="description"  />}
        <div className={styles.container}>
          <>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={handlePrev} />
            {filteredCards.map((food) => (
              <div className={styles.card} key={food.id}>
                <img width={250} src={food.image} alt="" />
                <Card image={food.image} item={food.itemName} amount={food.itemAmount} description={food.itemDescription} requested={''}  />
              </div>
            )).slice(0, 4)}
            <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={handleNext} />
          </>
        </div>
      </section>
    )
  } else if (mediaQueryTab.matches) {
    return (
      <section className={styles.shelf}>
        <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
        {openModal && <Modal closeModal={setOpenModal} image="image" item="item" amount="amount" description="description"/>}
        <div className={styles.container}>
          <>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={handlePrevTab} />
            {filteredCards.map((food) => (
              <div className={styles.card} key={food.id}>
                <img width={250} src={food.image} alt="" />
                <Card image={food.image} item={food.itemName} amount={food.itemAmount} description={food.itemDescription} requested={''}  />
              </div>
            )).slice(0, 2)}
            <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={handleNextTab} />
          </>
        </div>
      </section>
    )
  } else if(mediaQueryMob.matches) {
    
    return (
      <section className={styles.shelf}>
        <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
        {openModal && <Modal closeModal={setOpenModal} image="image" item="item" amount="amount" description="description" />}
        <div className={styles.container}>
          <>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={handlePrevMob} />
            {filteredCards.map((food) => (
              <div className={styles.card} key={food.id}>
                <img width={250} src={food.image} alt="" />
                <Card image={food.image} item={food.itemName} amount={food.itemAmount} description={food.itemDescription} requested={''} />
              </div>
            )).slice(0,1)}
            <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={handleNextMob} />
          </>
        </div>
      </section>
    )
    
  } else {
    return
  }
}

export default FruitsAndVegs;