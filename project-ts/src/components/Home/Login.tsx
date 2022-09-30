import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

const Login = () => {
  const [details, setDetails] = useState({ name:"", email:"", password:""})
  const [error, setError] = useState("")


  const userDetails = {
    name: "Britney Spears",
    email: "britney@gmail.com",
    password: "1234"
  }

  const navigate = useNavigate();
  const userLogin = (details: { name: string; email: string; password: string }) => {
    console.log(details)

    if (details.email === userDetails.email && details.password === userDetails.password) {
      navigate("/fridge")
    } else {
      alert('Incorrect email and/or password')
    }
  }

  
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    userLogin(details);
  }

  const userLogout = (details: any) => {
    console.log("Logout")
  }


  return (
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Ready to be a food hero?</h4>
          <p className={styles.p__foodhero}>Log in to start rescuing some food!</p>
        </div>
        <form className={styles.Cover__form} onSubmit={submitHandler}>
          <input type="email" name="email" id={styles.Cover__form__login__2} placeholder="E-mail address" onChange={_event => setDetails({...details, email: _event.target.value})} value={details.email}  />
          <input type="password" name="password" id={styles.Cover__form__login__2} placeholder="Password" onChange={_event => setDetails({...details, password: _event.target.value})} value={details.password} />
          <input type="submit" value="LOGIN" id={styles.Cover__form__btn} />
        </form>
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