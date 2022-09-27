import styles from './Home.module.css'

const Home = () => {
  return ( 
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h2>Tired of that meal? Don't let it go to waste!</h2>
        </div>
        <div className={styles.Cover__form}>
          <input type="text" name="firstname" id={styles.Cover__form__login} placeholder="First name" />
          <input type="text" name="lastname" id={styles.Cover__form__login} placeholder="Last name" />
          <input type="email" name="email" id={styles.Cover__form__login} placeholder="E-mail address" />
          <input type="password" name="password" id={styles.Cover__form__login} placeholder="Password" />
          <input type="submit" value="Sign Up" id={styles.Cover__form__btn} />
        </div>
      </section>
      <section className={styles.About}></section>
      <section className={styles.HowTo}></section>
    </div>
   );
}
 
export default Home;