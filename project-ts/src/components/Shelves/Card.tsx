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
        <img src={props.url} width={200} alt="" />
        <h3 className={styles.item}>Item: {props.item}</h3>
        <p className={styles.amnt}>Amount: {props.amount}</p>
        <p className={styles.desc}>Description: {props.description}</p>
      </div>
    
  )
}
