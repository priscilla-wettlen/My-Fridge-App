import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from './Header.module.css';
import { ContextUser } from './ContextUser';

const Header = () => {
  const logo = "my fridge"
  const home = "Home"
  const yourFridge = "Your Fridge"
  const yourFriends = "Your Friends"
  
  const user = useContext(ContextUser);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/')
  }

  return (
    <header>
      <Link to="/" className={styles.linkStyle}><h1 className={styles.logo}>{logo}</h1></Link>
      if(logged)
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.linkStyle}>{home}</Link>
          </li>
          <li className={styles.li}>
            <Link to="/fridge" className={styles.linkStyle}>{yourFridge}</Link>
          </li>
          <li className={styles.li}>
            <Link to="/friends" className={styles.linkStyle}>{yourFriends}</Link>
          </li>
          <li>{user}</li>
          <button className={styles.logout} onClick={handleLogout}>Logout</button>
            </ul>
      </nav>
      </header>
    
  );
}
 
export default Header;