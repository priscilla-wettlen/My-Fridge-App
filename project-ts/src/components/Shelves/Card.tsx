import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './Shelf.module.css';

type CardProps = {
  id?: number,
  item: string,
  amount: string,
  description: string,
  url?: string
}

const Card = (props: CardProps) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.card}>
        <img src={props.url} alt="" />
        <h3 className={styles.item}>{props.item}</h3>
        <p className={styles.amnt}>{props.amount}</p>
        <p className={styles.desc}>{props.description}</p>
        <button className={styles.requestItem} onClick={() => setOpenModal(true)}>Request Item</button>
    {openModal && <Modal closeModal={setOpenModal} item="item" amount="amount" description="description" />}
    </div>
  )
}

export default Card;