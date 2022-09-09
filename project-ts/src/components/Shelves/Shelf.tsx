//import { useState } from 'react';
import styles from './Shelf.module.css'; 
import FoodItems from '../foodsAPI.json';

type ShelfProps = {
  id?: number,
  item: string,
  amount: number,
  description: string,
  url?: string,
}

const ShelfItems = (props: ShelfProps) => {
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
  <div className={styles.container}>
    {
      FoodItems.map(food => {
        return (
          <div className={styles.shelf} key={food.id}>
            <img src={food.url} width={200} alt="" />
            <ShelfItems item={food.item} amount={food.amount} description={food.description} />
          </div>
        )
      })
      }
    </div>
  )
}

export default Shelf;