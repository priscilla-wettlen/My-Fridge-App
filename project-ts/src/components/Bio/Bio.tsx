import styles from './Bio.module.css'; 

type BioProps = {
    name: string,
  city: string,
  diet: string,
    bio:string,
    url?:string
} 


const Bio = (props: BioProps) => {
  return ( 
    <>
    <div className={styles.userBio}>
      <div className={styles.userImage}>
        <img className={styles.pf} src="img/user1.png" alt="" />
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
      </div>
      {/* <div className={styles.welcomeMessage}>
        <h3>Welcome {props.name}! Let's be food heroes and share some food.</h3>
      </div> */}
   </> 
   );
}
 
export default Bio;