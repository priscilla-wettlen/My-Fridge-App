import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import { signInWithEmailAndPassword } from 'firebase/auth'
//import {auth} from '../firebase-config'
import styles from './Home.module.css'



const Login = () => {
  // const [loginEmail, setLoginEmail] = useState("")
  // const [loginPassword, setLoginPassword] = useState("")
  const [details, setDetails] = useState({ email:"", password:""})
  const userDetails = { loginEmail: "britney@test.com", loginPassword: "user123" };
  const navigate = useNavigate();

  const handleLogin = () => {
     if (details.email === userDetails.loginEmail && details.password === userDetails.loginPassword) {
      navigate("/fridge")
    } else {
      alert('Incorrect email and/or password!')
    }
  }
  //const navigate = useNavigate();

  // const handleLogin = async () => {
  //   try {
  //     const result = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  //     console.log(result)
  //   }
  //   catch (err) {
  //     console.log("error")
  //   }
      
  // }


  return (
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Ready to be a food hero?</h4>
          <p className={styles.p__foodhero}>Log in to start rescuing some food!</p>
        </div>
        <form className={styles.Cover__form} onSubmit={handleLogin}>
          <input type="email" name="email" className={styles.Cover__form__login__2} placeholder="E-mail address" onChange={_event => setDetails({...details, email: _event.target.value})} value={details.email}  />
          <input type="password" name="password" className={styles.Cover__form__login__2} placeholder="Password" onChange={_event => setDetails({...details, password: _event.target.value})} value={details.password} />
          <input type="submit" value="LOGIN" id={styles.Cover__form__btn} />
        </form>
        <br />
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