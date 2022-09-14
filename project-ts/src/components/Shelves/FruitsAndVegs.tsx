import { useState } from 'react';
import { Card } from './Card';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';

const FruitsAndVegs = () => {
  const [currCard, setCurrCard] = useState(
          FoodItems[0].FruitsAndVegs.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(0,4)
  );
  const HandleClick = () => {
    setCurrCard(FoodItems[0].FruitsAndVegs.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(1,5))
  }
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      <div className={styles.container}>
        {currCard}
        <button onClick={HandleClick}>Click Me</button>
      </div>

    </section>
  )
}

export default FruitsAndVegs;
