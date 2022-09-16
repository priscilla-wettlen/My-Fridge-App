import CloseIcon from '@mui/icons-material/Close';
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
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.cancel} onClick={() => {props.closeModal(false)}}>Cancel</button>
            <button className={styles.requestItem}>Request Item</button>
          </div>
        </div>
      </div> 
  ) 
  
}

export default Modal;


