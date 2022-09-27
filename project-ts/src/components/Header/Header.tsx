import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const logo = "my fridge";
  const yourFridge = "Your Fridge"
  const yourFriends = "Your Friends"
  const about = "About My Fridge"
  const logout = "Logout"


  return (
    <header>
      <Link to="/" className={styles.linkStyle}><h1 className={styles.logo}>{logo}</h1></Link>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.linkStyle}>{yourFridge}</Link>
          </li>
          <li className={styles.li}>
            <Link to="/friends" className={styles.linkStyle}>{yourFriends}</Link>
          </li>
          <li className={styles.li}>{about}</li>
          <li className={styles.li}>{logout}</li>
            </ul>
      </nav>
      </header>
    
  );
}
 
export default Header;