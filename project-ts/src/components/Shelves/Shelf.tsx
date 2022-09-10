//import { useState } from 'react';
import styles from './Shelf.module.css'; 
import FoodItems from '../foodsAPI.json';

type ShelfProps = {
  id?: number,
  item: string,
  amount: string,
  description: string,
  url?: string,
}

const ShelfItems = (props:ShelfProps) => {
  return (
    <div>
      <h3 className={styles.item}>{props.item}</h3>
      <p className={styles.amnt}>{props.amount}</p>
      <p className={styles.desc}>{props.description}</p>
    </div>
  );
}


const Shelf = () => {
  return (
    <section className={styles.fruitsAndVeggies}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
    <div className={styles.container}>
    {
        FoodItems.map(food => {
          return food.amount <= 1 ?
          <div className={styles.card}>
            <div className={styles.shelf} key={food.id}>
              <img src={food.url} width={200} alt="" />
              <ShelfItems item={food.item} amount={`${food.amount} piece`} description={food.description} />
              </div>
          </div>
            :
          <div className={styles.card}>
            <div className={styles.shelf} key={food.id}>
              <img src={food.url} width={200} alt="" />
              <ShelfItems item={food.item} amount={`${food.amount} pieces`} description={food.description} />
            </div>
          </div>
      })
      }
      </div>
    </section>
  )
}

export default Shelf;