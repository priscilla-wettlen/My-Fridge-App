import { useState } from 'react';
import { Card } from './Card';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DairyProducts = () => {
  const [currCard, setCurrCard] = useState(FoodItems[0].DairyProducts.map(food =>
    <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} />
  ).slice(0,2)
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
        <ArrowBackIosIcon className={styles.arrowBack} onClick={HandleClickLeft} />
        {currCard}
        <ArrowForwardIosIcon className={styles.arrowForward} onClick={HandleClickRight} />
      </div>

    </section>
  )
}

export default DairyProducts;