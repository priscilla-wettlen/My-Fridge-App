//import { useState } from 'react';
import Card from './Card';
import styles from './Shelf.module.css'; 




const Shelf = () => {
  return (
    <section className={styles.fruitsAndVeggies}>
      <h3 className={styles.sectionTitle}>Fruits and Veggies</h3>
      <Card />
      
    </section>
  )
}

export default Shelf;