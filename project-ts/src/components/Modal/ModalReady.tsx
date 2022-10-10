import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css';


type ModalReadyProps = {
  id?:number,
  itemName: string,
  itemAmount: string,
  itemDescription: string,
  image?: string,
  closeModal: (arg:boolean) => void
}


const ModalReady = (props: ModalReadyProps) => {
  const [id, setId] = useState(null)
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")
  const [imageURL, setImageURL] = useState("");
  

  

  const handleSubmit = async () => {
    try {
      let res = await fetch("http://localhost:8000/ready-eat", {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
          itemName: item,
          itemAmount: amount,
          itemDescription: description,
          image: imageURL
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      //let resJson = await res.json();
      if (res.status === 200) {
        setId(id);
        setItem("");
        setAmount("");
        setDescription("");
        setImageURL("");
      } else {
        alert("An error occurred.");
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

export default ModalReady;




