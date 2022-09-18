import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css';

type ModalProps = {
  id?: number,
  item: string,
  amount: string,
  description: string,
  url?: string,
  closeModal: (arg:boolean) => void
}


const Modal = (props: ModalProps) => {
  const[message, setMessage] = useState("")
  
  return (
      <div className={styles.modalBg}>
        <div className={styles.modalContainer}>
          <div className={styles.CloseIcon}><CloseIcon style={{cursor:"pointer"}} onClick={() => {props.closeModal(false)}} /></div>
          <div className={styles.modalContent}>
            <img src={props.url} width={400} alt="" />
            <div className={styles.modalProps}>
              <h3 className={styles.item}>Item:{props.item}</h3>
              <p className={styles.amnt}>Amount:{props.amount}</p>
              <p className={styles.desc}>Description:{props.description}</p>
            <textarea className={styles.message} rows={4} cols={30} placeholder="Hi! I'd like to save some food."></textarea>
            <p>{message}</p>
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.cancel} onClick={() => {props.closeModal(false)}}>Cancel</button>
          <button className={styles.requestItem} onClick={() => { setMessage("Request sent. You may close this window.")}}>Request Item</button>
          </div>
        </div>
      </div> 
  ) 
  
}

export default Modal;


