import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css';


type ModalFVProps = {
  id:string,
  itemName: string,
  itemAmount: string,
  itemDescription: string,
  image?: string,
  closeModal: (arg:boolean) => void
}


const ModalDairy = (props: ModalFVProps) => {
  const [itemName, setItemName] = useState("")
  const [itemAmount, setItemAmount] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [image, setImage] = useState("")
  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setTimeout(() => {
      window.location.reload()
    }, 200);
    const postItem = {itemName, itemAmount, itemDescription, image}

    try {
      let res = await fetch("https://fridge-mongodb.herokuapp.com/api/dairy", {
        method: "POST",
        body: JSON.stringify(postItem),
        headers: {
            'Content-type': 'application/json',
         }
       });
        
      let json = await res.json();
      console.log(res.json())

      if (json === 200 || 201) {
        console.log('New food added')
        console.log(res.json())
      }
      
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
              <input type="url" value={image} id={styles.inputURL} placeholder="Image URL" required onChange={(event) => setImage(event.target.value)} />
              <input type="submit" id={styles.Submit} value="Upload Item" />
            </form>
          </div>
        </div>
      </div>
    
    
  ) 
  
}

export default ModalDairy;




