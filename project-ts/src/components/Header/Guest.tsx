import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Guest = () => {
  const logo = "my fridge"
  const home = "Home"
  const aboutMyFridge = "About My Fridge"
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <header>
      <Link to="/" className={styles.linkStyle}><h1 className={styles.logo}>{logo}</h1></Link>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li} onClick={()=>{window.scrollTo(0, 0)}}>
            <Link to="/" className={styles.linkStyle}>{home}</Link>
          </li>
          <li className={styles.li}>
            <a href='#about'className={styles.linkStyle}>{aboutMyFridge}</a>
          </li>
          <button className={styles.logout} onClick={handleSignUp}>Sign Up</button>
            </ul>
      </nav>
      </header>
    
  );
}
 
export default Guest;