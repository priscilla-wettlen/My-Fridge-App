import { Card } from './Card';
import FoodItems from '../foodsAPI.json';
import styles from './Shelf.module.css';

const DairyProducts = () => {
  return (
    <section className={styles.shelf}>
      <h3 className={styles.sectionTitle}>Dairy Products</h3>
        <div className={styles.container}>
        {
          FoodItems[0].DairyProducts.map(food => 
             <Card url={food.url} item={food.item} amount={`${food.amount} pieces`} description={food.description} />
            )
        }
      </div>

    </section>
  )
}

export default DairyProducts;