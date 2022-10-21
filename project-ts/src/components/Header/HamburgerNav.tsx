import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const HamburgerNav = () => {
  const logo = "my fridge"
  const home = "Home"
  const yourFridge = "Your Fridge"
  const yourFriends = "Your Friends"
  const aboutMyFridge = "About My Fridge"
  const navigate = useNavigate();
  const handleLogout = () => { navigate('/') }
  const [navbarOpen, setNavbarOpen] = useState(false)


  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
  setNavbarOpen(false)
}

  return ( 
    <>
      <header>
      <Link to="/" className={styles.linkStyle}><h1 className={styles.logo}>{logo}</h1></Link>
      
      <nav>
        <button onClick={handleToggle} className={styles.toggleBtn}>{navbarOpen ? <FontAwesomeIcon icon={faClose} className={styles.closeBtn} /> : <FontAwesomeIcon icon={faBars} className={styles.menuBtn} />}</button>
        <ul className={styles[`menuNav${navbarOpen ? " showMenu" : ""}`]}>
          <li className={styles.li_r}  onClick={() => closeMenu()}>
            <Link to="/" className={styles.linkStyle}>{home}</Link>
          </li>
          <li className={styles.li_r} onClick={() => closeMenu()}>
            <a href='#about' className={styles.linkStyle}>{aboutMyFridge}</a>
          </li>
          <li className={styles.li_r} onClick={() => closeMenu()}>
            <Link to="/fridge" className={styles.linkStyle}>{yourFridge}</Link>
          </li>
          <li className={styles.li_r} onClick={() => closeMenu()}>
            <Link to="/friends" className={styles.linkStyle}>{yourFriends}</Link>
          </li>
          <li className={styles.li_r} onClick={handleLogout}>
            <Link to="/friends" className={styles.linkStyle}>Logout</Link>
          </li>
        </ul>
        </nav>
      </header>
    </>
   );
}
 
export default HamburgerNav;