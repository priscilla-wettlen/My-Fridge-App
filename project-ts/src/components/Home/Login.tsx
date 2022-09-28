import styles from './Home.module.css'

const Login = () => {
  return (
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Tired of that meal?</h4>
          <h4>Don't throw it out!</h4>
          <p className={styles.p__foodhero}>Just put it on your Fridge and let someone else rescue it.</p>
          <p className={styles.p__signup}>Ready to be a food hero? Sign up for My Fridge today. It's free!</p>
        </div>
        <div className={styles.Cover__form}>
          <input type="email" name="email" id={styles.Cover__form__login__2} placeholder="E-mail address" />
          <input type="password" name="password" id={styles.Cover__form__login__2} placeholder="Password" />
          <input type="submit" value="Login" id={styles.Cover__form__btn} />
        </div>
      </section>
      <section className={styles.About}>
        hello
      </section>
      <section className={styles.HowTo}>
        hello
      </section>
    </div>
  );
}
export default Login;