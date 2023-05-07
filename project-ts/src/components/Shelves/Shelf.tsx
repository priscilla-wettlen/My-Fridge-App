import FruitsAndVegs from './FruitsAndVegs';
import DairyProducts from './DairyProducts';
import ReadyToEat from './ReadyToEat';
import styles from './Shelf.module.css';



const Shelf = () => {
  return (
    <div>
      <h2 className={styles.shelfTitle}>Your Shelves</h2>
      <FruitsAndVegs />
      <DairyProducts />
      <ReadyToEat />
    </div>
  )
}

export default Shelf;