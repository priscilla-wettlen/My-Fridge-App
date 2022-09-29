import { useState } from 'react';
import  Card  from './Card';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const ReadyToEat = () => {
  const [currCard, setCurrCard] = useState(FoodItems[0].ReadyToEat.map(food => {
    return food.amount <= 1 ?
      <Card key={food.id} url={food.url} item={food.item} amount={`${food.amount} piece`} description={food.description} />
      :
      <Card key={food.id} url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} />
    }).slice(0,4)
  );
  const HandleClickRight = () => {
    setCurrCard(FoodItems[0].ReadyToEat.map(food => {
      return food.amount <= 1 ?
        <Card url={food.url} item={food.item} amount={`${food.amount} piece`} description={food.description} /> 
        :
        <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
      }).slice(2,6))
  }
  const HandleClickLeft = () => {
    setCurrCard(FoodItems[0].ReadyToEat.map(food => {
      return food.amount <= 1 ?
        <Card url={food.url} item={food.item} amount={`${food.amount} piece`} description={food.description} />
        :
        <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} />
      }).slice(0,4))
  }
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Ready to Eat</h3>
        <div className={styles.container}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowBack} onClick={HandleClickLeft} />
        {currCard}
        <FontAwesomeIcon icon={faChevronRight} className={styles.arrowForward} onClick={HandleClickRight} />
      </div>

    </section>
  )
}

export default ReadyToEat;