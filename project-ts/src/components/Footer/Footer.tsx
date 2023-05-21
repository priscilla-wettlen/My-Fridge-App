import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  const logo: string = "my fridge";
  const linkStyle = {
    textDecoration: "none"
  }

    return (
      <footer>
        <div className={styles.footerContainer}>
          <Link style={linkStyle} to="/"><h1 className={styles.logo}>{logo}</h1></Link>
          <div className={styles.socialIcons}>
            <FontAwesomeIcon className={styles.icons} icon={faFacebook} />
            <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
            <FontAwesomeIcon className={styles.icons} icon={faTwitter} />
            <FontAwesomeIcon className={styles.icons} icon={faTiktok} />
          </div>
        </div>
        <div className={styles.footerContainerInfo}>
          <div>
            <p className={styles.footerContainerPara}>About My Fridge</p>
            <p className={styles.footerContainerPara}>Privacy Policy</p>
          </div>
          <div>
            <p className={styles.footerContainerPara}>Careers</p>
            <p className={styles.footerContainerPara}>Contact Us</p>
          </div>
          <div>
            <p>© MY FRIDGE APP 2023</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer