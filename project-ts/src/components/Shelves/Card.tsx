import { useState, useEffect } from 'react';
//import ModalUpload from '../Modal/ModalFV';
import styles from './Shelf.module.css';

type CardProps = {
  id?: number,
  item: string,
  amount: string,
  description: string,
  imageURL?: string

}

const Card = (props: CardProps) => {
  const handleDelete = async() => {
    try {
      await fetch('http://localhost:8000/fruit-veg/:id', {
        method: 'DELETE'
      })
      window.location.reload()
      console.log('deleted')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className={styles.card}>
        <h3 className={styles.item}>{props.item}</h3>
        <p className={styles.amnt}>{props.amount}</p>
      <p className={styles.desc}>{props.description}</p>
      <button className={styles.requestItem} onClick={handleDelete}>Remove Item</button>
      </div>
  )
}

export default Card;