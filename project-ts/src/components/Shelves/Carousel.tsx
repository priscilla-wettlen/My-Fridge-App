import styles from './Shelf.module.css';

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}></div>
      <div className={styles.carousel}></div>
      <div className={styles.carousel}></div>
      <div className={styles.carousel}></div>
    </div>
  )
}

export default Carousel;