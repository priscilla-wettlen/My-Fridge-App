import { Card } from './Card';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';

const ReadyToEat = () => {
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Ready to Eat</h3>
        <div className={styles.container}>
        {
          FoodItems[0].ReadyToEat.map(food => 
             <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} />
            )
        }
      </div>

    </section>
  )
}

export default ReadyToEat;