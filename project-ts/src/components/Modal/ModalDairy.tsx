import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import styles from './Modal.module.css';


type ModalDairyProps = {
  id:string,
  itemName: string,
  itemAmount: string,
  itemDescription: string,
  image?: string,
  closeModal: (arg:boolean) => void
}


const ModalDairy = (props: ModalDairyProps) => {
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [imageURL, setImageURL] = useState("");
  
  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:3000/dairy", {
        method: "POST",
        body: JSON.stringify({
          id: uuidv4(),
          itemName: item,
          itemAmount: amount,
          itemDescription: description,
          image: imageURL
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });  
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
              <input type="text" value={item} id={styles.inputItem} placeholder="Item" required onChange={(event) => setItem(event.target.value)} />
              <input type="text" value={amount} id={styles.inputAmount} placeholder="Amount" required onChange={(event) => setAmount(event.target.value)} />
              <input type="text" value={description} id={styles.inputDescription} placeholder="Description" required onChange={(event) => setDescription(event.target.value)} />
              <input type="url" value={imageURL} id={styles.inputURL} placeholder="Image URL" required onChange={(event) => setImageURL(event.target.value)} />
              <input type="submit" id={styles.Submit} value="Upload Item" />
            </form>
          </div>
        </div>
      </div>
    
    
  ) 
  
}

export default ModalDairy;




