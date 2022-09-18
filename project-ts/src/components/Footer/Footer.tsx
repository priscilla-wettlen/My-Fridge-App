import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.css';

const Footer = () => {
  const logo = "my fridge";
  return (
    <footer className={styles.footerContainer}>
      <h1 className={styles.logo}>{logo}</h1>
      <div>
  
      </div>
      <div className={styles.copyright}>
        <p>©Copyright My Fridge 2022</p>
      </div>
    </footer>
  )
}

export default Footer;