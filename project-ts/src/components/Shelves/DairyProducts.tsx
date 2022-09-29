import { useState } from 'react';
import Card  from './Card';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const DairyProducts = () => {
  const [currCard, setCurrCard] = useState(FoodItems[0].DairyProducts.map(food => {
    return food.amount <= 1 ?
      <Card key={food.id} url={food.url} item={food.item} amount={`${food.amount} piece`} description={food.description} />
      :
      <Card key={food.id} url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} />
  }).slice(0,2)
  );
  const HandleClickRight = () => {
    setCurrCard(FoodItems[0].DairyProducts.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(0,2))
  }
  const HandleClickLeft = () => {
    setCurrCard(FoodItems[0].DairyProducts.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(0,2))
  }
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Dairy Products</h3>
        <div className={styles.container}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={HandleClickLeft} />
        {currCard}
        <FontAwesomeIcon icon={faChevronRight} onClick={HandleClickRight} />
      </div>

    </section>
  )
}

export default DairyProducts;