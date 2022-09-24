import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const logo = "my fridge";
  const yourFridge = "Your Fridge"
  const yourFriends = "Your Friends"
  const about = "About My Fridge"
  const logout = "Logout"

  const linkStyle = {
  textDecoration: "none",
  
};
  return (
    <header>
      <Link to="/" style={linkStyle}><h1 className={styles.logo}>{logo}</h1></Link>
      <nav>
        <ul className={styles.ul}>
          <Link to="/" style={linkStyle}><li className={styles.li}>{yourFridge} </li></Link>
          <Link to="/friends" style={linkStyle}><li className={styles.li}>{yourFriends}</li></Link>
          <li className={styles.li}>{about}</li>
          <li className={styles.li}>{logout}</li>
            </ul>
      </nav>
      </header>
    
  );
}
 
export default Header;