import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4, faMagnifyingGlass, faCarrot, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faFaceLaughBeam, faCartShopping, faHandshake, faUtensils } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css'


const Home = () => {
  const [details, setDetails] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const userDetails = ({ loginEmail: "britney@test.com", loginPassword: "user123" })
  
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if (details.email === userDetails.loginEmail && details.password === userDetails.loginPassword) {
      navigate("/fridge")
    } else if (details.email === "" || details.password === "") {
        setError("Please enter your email and password");
      } else {
        setError("Incorrect email and/or password");
      }
        
  }
  
    return (
      <>
        <section className={styles.Cover}>
          <div className={styles.Cover__info}>
            <h4>Ready to be a food hero?</h4>
            <p className={styles.p__foodhero}>Log in to start rescuing some food!</p>
          </div>
          <div className={styles.Cover__form}>
            <form className={styles.Cover__form} onSubmit={handleLogin}>
              <input type="email" className={styles.Cover__form__login} placeholder="E-mail address" onChange={_event => setDetails({ ...details, email: _event.target.value })} value={details.email} />
              <input type="password" className={styles.Cover__form__login} placeholder="Password" onChange={_event => setDetails({ ...details, password: _event.target.value })} value={details.password} />
              <input type="submit" value="LOGIN" id={styles.Cover__form__btn} />
            </form>
            <br />
            <p className={styles.p__login}>{error}</p>
            <p className={styles.p__login}>Don't have an account yet? <Link to="/signup" className={styles.linkStyle}>Sign up!</Link></p>
          </div>
        </section>
        <section id="about" className={styles.About}>
          <h4 className={styles.About__title}>How it works</h4>
            <div className={styles.About__children}>
            <div className={styles.About__div}>
              <FontAwesomeIcon icon={fa1} className={styles.numbers} />
              <h4>Browse</h4>
              <p>your friends fridges for hundreds of items.</p>
              <div className={styles.About__children__icons}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.About__singleIcon} />
                <FontAwesomeIcon icon={faCarrot} className={styles.About__singleIcon} />
                <FontAwesomeIcon icon={faPizzaSlice} className={styles.About__singleIcon} />
              </div>
              </div>
            <div className={styles.About__div}>
              <FontAwesomeIcon icon={fa2} className={styles.numbers} />
              <h4>Request</h4>
              <p>Found something you liked? Send your friend a message to let them know!</p>
              <div className={styles.About__children__icons}>
                <FontAwesomeIcon icon={faFaceLaughBeam} className={styles.About__singleIcon} />
                <FontAwesomeIcon icon={faMessage} className={styles.About__singleIcon} />
              </div>
            </div>
            <div className={styles.About__div}>
              <FontAwesomeIcon icon={fa3} className={styles.numbers} />
              <h4>Pick up</h4>
              <p>Meet yout friend to pick up your item (and maybe catch up?)</p>
              <div className={styles.About__children__icons}>
                <FontAwesomeIcon icon={faCartShopping} className={styles.About__singleIcon} />
                <FontAwesomeIcon icon={faHandshake} className={styles.About__singleIcon} />
              </div>
            </div>
            <div className={styles.About__div}>
              <FontAwesomeIcon icon={fa4} className={styles.numbers} />
              <h4>Enjoy!</h4>
              <p>Guess we don't need to tell you how to do that</p>
              <div className={styles.About__children__icons}>
                <FontAwesomeIcon icon={faUtensils} className={styles.About__singleIcon} />
                <FontAwesomeIcon icon={faFaceLaughBeam} className={styles.About__singleIcon} />
              </div>
            </div>
          </div>
        </section>
      </>
    )
}
  
  export default Home;

