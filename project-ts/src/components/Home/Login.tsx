import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import { signInWithEmailAndPassword } from 'firebase/auth'
//import {auth} from '../firebase-config'
import styles from './Home.module.css'



const Login = () => {
  // const [loginEmail, setLoginEmail] = useState("")
  // const [loginPassword, setLoginPassword] = useState("")
  const [details, setDetails] = useState({ email: "", password: "" })
  //const [loginEmail, setLoginEmail] = useState("")
  //const [loginPassword, setLoginPassword] = useState("")
  //const [data, setData] = useState({email: "", password: ""});
  //const [error, setError] = useState(false);
  //const userDetails = { loginEmail: "britney@test.com", loginPassword: "user123" };
  const navigate = useNavigate();

  // const handleLogin = () => {
  //    if (details.email === userDetails.loginEmail && details.password === userDetails.loginPassword) {
  //     navigate("/fridge")
  //   } else {
  //     alert('Incorrect email and/or password!')
  //   }
  // }
  
  
  


  

  const HandleLogin = async (e: { preventDefault: () => void; }) => { 
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify({
          details
        }),
        headers: {
            'Content-type': 'application/json',
         },
      });
      //let resJson = await res.json();
      fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
    })
      .catch((err) => {
      console.log(err.message)
  })
      if (res.status === 200) {
        navigate("/fridge");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    

  }

  return (
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Ready to be a food hero?</h4>
          <p className={styles.p__foodhero}>Log in to start rescuing some food!</p>
        </div>
        <form className={styles.Cover__form} onSubmit={HandleLogin}>
          <input type="email"  className={styles.Cover__form__login__2} placeholder="E-mail address" name="email" onChange={_event => setDetails({...details, email: _event.target.value})} value={details.email} />
          <input type="password" className={styles.Cover__form__login__2} placeholder="Password" name="password" onChange={_event => setDetails({...details, password: _event.target.value})} value={details.password} />
          <input type="submit" value="LOGIN" id={styles.Cover__form__btn} />
        </form>
        <br />
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
export default Login;
