import styles from './Shelf.module.css';

type CardProps = {
  id?: number,
  item: string,
  amount: string,
  description: string,
  url?: string,
}

export const Card= (props: CardProps) => {
  return (
      <div className={styles.card}>
        <img src={props.url} alt="" />
        <h3 className={styles.item}>{props.item}</h3>
        <p className={styles.amnt}>{props.amount}</p>
        <p className={styles.desc}>{props.description}</p>
        <button className={styles.requestItem}>Request Item</button>
      </div>
    
  )
}
