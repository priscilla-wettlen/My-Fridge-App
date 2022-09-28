import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import styles from './Home.module.css'

const SignUpForm = () => {
  
  return (
    <div className={styles.Cover__form}>
          <input type="text" name="firstname" id={styles.Cover__form__login} placeholder="First name" />
          <input type="text" name="lastname" id={styles.Cover__form__login} placeholder="Last name" />
          <input type="email" name="email" id={styles.Cover__form__login} placeholder="E-mail address" />
          <input type="password" name="password" id={styles.Cover__form__login} placeholder="Password" />
          <input type="submit" value="Sign Up" id={styles.Cover__form__btn} />
        </div>
  )
} 

const Home = () => {
  const [login, setLogin] = useState(SignUpForm)
  const handleLogin = () => {
    setLogin(<Login />)
  }
  return ( 
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Tired of that meal?</h4>
          <h4>Don't throw it out!</h4>
          <p className={styles.p__foodhero}>Sign up for My Fridge today to become a food hero. It's free!</p>
        </div>
        <div className={styles.Cover__form}>
        {login}
        <br />
          <p className={styles.p__login}>Already have a Fridge? <Link to="/login" className={styles.linkStyle} onClick={handleLogin}>Login</Link></p>
        </div>
      </section>
      <section className={styles.About}>
        <h4>How it works</h4>
        <div className={styles.About__div}>1. This</div>
        <div className={styles.About__div}>2. That</div>
        <div className={styles.About__div}>3. This again</div>
      </section>
    </div>
   );
}
 
export default Home;