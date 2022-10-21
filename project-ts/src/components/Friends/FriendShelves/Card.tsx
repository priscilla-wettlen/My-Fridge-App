import { useState} from 'react';
import Modal from '../../Modal/Modal';
import styles from './FriendShelf.module.css';

type CardProps = {
  id?: string,
  item: string,
  amount: string,
  description: string,
  image: any
}

const Card = (props: CardProps) => {
  const [openModal, setOpenModal] = useState(false)


  return (
    <>
    <div className={styles.cardInfo}>
        <h3 className={styles.item}>{props.item}</h3>
        <p className={styles.amnt}>{props.amount}</p>
        <p className={styles.desc}>{props.description}</p>
    </div>
    <button className={styles.requestItem} onClick={() => setOpenModal(true)}>Request Item</button>
      {openModal && <Modal closeModal={setOpenModal} image={props.image} item={props.item} amount={props.amount} description={props.description} requested={0} />}
    </>
  )
}

export default Card;