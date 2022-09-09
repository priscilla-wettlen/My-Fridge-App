import styles from './Bio.module.css'; 
import userList from '../userList.json';

type BioProps = {
    name: string,
    location?: string,
    diet: string
    url?:string
} 
const Profile = (props: BioProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      <h3>{props.diet}</h3>
    </div>
  );
};

const Bio = () => {
  return ( 
    <div className={styles.userBio}>
      <div className={styles.userImage}>
        <img className={styles.pf} src={userList[0].url} alt="" />
      </div>
      <br />
      <br />
      <div className={styles.userInfo}>
        <Profile name={userList[0].name} location={userList[0].location} diet={userList[0].diet} />
      </div>
   </div>
   );
}
 
export default Bio;