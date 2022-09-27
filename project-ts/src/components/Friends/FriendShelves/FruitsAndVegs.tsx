import { useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import FoodItems from '../../foodsAPI.json';
import styles from './FriendShelf.module.css';


const FruitsAndVegs = () => {
  const [currCard, setCurrCard] = useState(
    FoodItems[0].FruitsAndVegs.map(food =>
          {return food.amount <= 1 ?
      <Card key={food.id} url={`/${food.url}`} item={food.item} amount={`${food.amount} piece`} description={food.description} /> 
      :
      <Card key={food.id} url={`/${food.url}`} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          }).slice(5, 9)
  );
  const HandleClickRight = () => {
    setCurrCard(FoodItems[0].FruitsAndVegs.map(food => {
      return food.amount <= 1 ?
        <Card key={food.id} url={`/${food.url}`} item={food.item} amount={`${food.amount} piece`} description={food.description} /> 
        :
        <Card key={food.id} url={`/${food.url}`} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
      }).slice(7,11))
  }
  const HandleClickLeft = () => {
    setCurrCard(FoodItems[0].FruitsAndVegs.map(food => {
      return food.amount <= 1 ?
        <Card key={food.id} url={`/${food.url}`} item={food.item} amount={`${food.amount} piece`} description={food.description} /> 
        :
        <Card key={food.id} url={`/${food.url}`} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
      }).slice(5,9))
  }
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowBack} onClick={HandleClickLeft} />
          {currCard}
        <FontAwesomeIcon icon={faChevronRight} className={styles.arrowForward} onClick={HandleClickRight} />
      </div>
    </section>
  )
}

export default FruitsAndVegs;