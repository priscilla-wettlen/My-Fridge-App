import { Link } from 'react-router-dom';
import Login from './Login';
import styles from './Home.module.css'



const Home = () => {
  
  return ( 
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Tired of that meal?</h4>
          <h4>Don't throw it out!</h4>
          <p className={styles.p__foodhero}>Sign up for My Fridge today to become a food hero. It's free!</p>
        </div>
        <div className={styles.Cover__form}>
          <form className={styles.Cover__form}>
            <input type="text" name="firstname" className={styles.Cover__form__login} placeholder="First name" />
            <input type="text" name="lastname" className={styles.Cover__form__login} placeholder="Last name" />
            <input type="email" name="email" className={styles.Cover__form__login} placeholder="E-mail address"  />
            <input type="password" name="password" className={styles.Cover__form__login} placeholder="Password" />
            <input type="submit" value="SIGNUP" id={styles.Cover__form__btn} />
          </form>
          <br />
          <p className={styles.p__login}>Already have a Fridge? <Link to="/login" className={styles.linkStyle}>Login</Link></p>
        </div>
      </section>
      <section className={styles.About}>
        <h4 className={styles.About__title}>How it works</h4>
        <div className={styles.About__div}>1. Browse your friends' Fridges</div>
        <div className={styles.About__div}>2. Found something you liked? Request it!</div>
        <div className={styles.About__div}>3. Meet your friend to pick up your item (And maybe catch up?)</div>
        <div className={styles.About__div}>4. Cook and enjoy!</div>
      </section>
    </div>
   );
}
 
export default Home;