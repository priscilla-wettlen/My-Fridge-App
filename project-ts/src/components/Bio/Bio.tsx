import styles from './Bio.module.css'; 
import userList from '../userList.json';

type Bio ={
    name: string,
    location: string,
  diet: string
    url:string
  } 
const Bio = () => {
  console.log(userList)
  return ( 
    <div className={styles.userBio}>
      <div className={styles.userImage}>
        <img className={styles.pf} src={userList[0].url} alt="" />
      </div>
      <br />
      <br />
      <div className={styles.userInfo}>
        <h2>{userList[0].name}</h2>
        <h3>{userList[0].location}</h3>
        <h3>{userList[0].diet}</h3>
      </div>
   </div>
   );
}
 
export default Bio;