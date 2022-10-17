import styles from '../Bio/Bio.module.css'; 

type BioProps = {
  name: string,
  city: string,
  diet: string,
  bio:string,
  url?:string
} 


const FriendBio = (props: BioProps) => {
  return ( 
    <section className={styles.userBio}>
      <div className={styles.userImage}>
        <img className={styles.pf} src="https://iili.io/sCwkwF.jpg" alt="" />
      </div>
        <br />
        <br />
        <br />
      <div className={styles.userInfo}>
        <div>
            <h2 className={styles.name}>{props.name}</h2>
            <p className={styles.city}>{props.city}</p>
            <p className={styles.diet}>{props.diet}</p>
            <p className={styles.bio}>{props.bio}</p>
        </div>
      </div>
   </section>
   );
}
 
export default FriendBio;