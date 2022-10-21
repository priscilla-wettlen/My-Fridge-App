import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css';

interface ModalProps {
  id?: string,
  item: string,
  amount: string,
  description: string,
  image: any,
  requested?:number,
  closeModal: (arg:boolean) => void
}

const Modal = (props: ModalProps) => {
  const [reqMessage, setReqMessage] = useState("")
  
  
  function handleRequest() {
    setTimeout(() => {setReqMessage('Item requested!')}, 500)
    setTimeout(() => { window.location.reload() }, 1500);
   
  } 
  
  return (
      <div className={styles.modalBg}>
        <div className={styles.modalContainer}>
          <div className={styles.CloseIcon}><FontAwesomeIcon icon={faXmark} style={{cursor:"pointer"}} onClick={() => {props.closeModal(false)}} /></div>
          <div className={styles.modalContent} key={props.id}>
            <img src={props.image} width={400} alt="" />
            <div className={styles.modalProps}>
            <h3 className={styles.item}>{props.item}</h3>
              <p className={styles.amnt}>{props.amount}</p>
            <p className={styles.desc}>{props.description}</p>
            <textarea className={styles.message} rows={4} cols={30} placeholder={`Tell Madonna why she should share her ${props.item} with you`} />
            <p className={styles.title}>{reqMessage}</p>
          </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.cancel} onClick={() => {props.closeModal(false)}}>Cancel</button>
          <button className={styles.requestItem} onClick={handleRequest}>Request Item</button>
          </div>
        </div>
      </div> 
  ) 
  
}

export default Modal;


