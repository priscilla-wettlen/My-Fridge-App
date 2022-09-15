import { useState } from 'react';
import { Card } from './Card';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';

const FruitsAndVegs = () => {
  const [currCard, setCurrCard] = useState(
          FoodItems[0].FruitsAndVegs.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(0,4)
  );
  const HandleClickRight = () => {
    setCurrCard(FoodItems[0].FruitsAndVegs.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(1,5))
  }
  const HandleClickLeft = () => {
    setCurrCard(FoodItems[0].FruitsAndVegs.map(food => 
              <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} /> 
          ).slice(0,4))
  }
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      <div className={styles.container}>
        <ArrowBackIosIcon className={styles.arrowBack} onClick={HandleClickLeft} />
        {currCard}
        <ArrowForwardIosIcon className={styles.arrowForward} onClick={HandleClickRight} />
      </div>

    </section>
  )
}

export default FruitsAndVegs;
