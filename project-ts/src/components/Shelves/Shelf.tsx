//import { useState } from 'react';
import styles from './Shelf.module.css'; 
import FoodItems from '../foodsAPI.json';

type Shelf = {
  id: number,
  name: string,
  url: string,
}

const Shelf = () => {
  return (
  <div className={styles.container}>
    {
      FoodItems.map(food => {
        return (
          <div className={styles.shelf} key={food.id}>
            <img src={food.url} width={200} alt="" />
          </div>
        )
      })
      }
    </div>
  )
}

export default Shelf;