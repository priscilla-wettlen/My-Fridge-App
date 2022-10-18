
import styles from '../Shelves/Shelf.module.css';

export interface CardProps {
  id: string,
  itemName: string,
  itemAmount: string,
  itemDescription: string,
  image?: string,

}

const Card = (props: CardProps) => {
  const handleDelete = async (e: React.MouseEvent) => {
    try {
      await fetch('https://fridge-mongodb.onrender.com/api/misc/' + props.id, {
        method: 'DELETE'
      })
      window.location.reload()
      console.log('deleted')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.cardInfo}>
        <h3 className={styles.item}>{props.itemName}</h3>
        <p className={styles.amnt}>{props.itemAmount}</p>
      <p className={styles.desc}>{props.itemDescription}</p>
      <button className={styles.requestItem} onClick={handleDelete}>Remove Item</button>
      </div>
  )
}

export default Card;