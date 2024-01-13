import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css';
import { ModalProps } from './ModalFV';


const ModalMisc = (props: ModalProps) => {
  const [itemName, setItemName] = useState("")
  const [itemAmount, setItemAmount] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [image, setImage] = useState<File | undefined>();
  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('itemAmount', itemAmount);
    formData.append('itemDescription', itemDescription);
    if (image) {
      formData.append('image', image);
    }

    try {
      await fetch(`https://fridge-mongodb.onrender.com/api/misc/`, {
        method: "POST",
        body: formData,
       });
      setTimeout(() => {
        window.location.reload() 
      }, 200);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.modalBg}>
      <div className={styles.modalUploadContainer}>
        <div className={styles.CloseIcon}><FontAwesomeIcon icon={faXmark} style={{ cursor: "pointer" }} onClick={() => props.closeModal(false)} /></div>
          <div className={styles.modalUploadContent}>
            <h3 className={styles.title}>Add an item to your Fridge</h3>
          <form className={styles.modalUploadForm} onSubmit={handleSubmit}>
              <input type="text" value={itemName} id={styles.inputItem} placeholder="Item" required onChange={(event) => setItemName(event.target.value)} />
              <input type="text" value={itemAmount} id={styles.inputAmount} placeholder="Amount" required onChange={(event) => setItemAmount(event.target.value)} />
              <input type="text" value={itemDescription} id={styles.inputDescription} placeholder="Description" required onChange={(event) => setItemDescription(event.target.value)} />
              <input
              type="file"
              id={styles.inputURL}
              accept="image"
              onChange={(event) => setImage(event.target.files?.[0])}
            />
            <input type="submit" id={styles.Submit} value="Upload Item" />
            </form>
          </div>
        </div>
      </div>
    
    
  ) 
  
}

export default ModalMisc;