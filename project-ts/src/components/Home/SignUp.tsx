import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Home.module.css'



const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  let navigate = useNavigate();

  const register = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      let res = await fetch("https://my-fridge-server.onrender.com/newUser", {
        method: "POST",
        body: JSON.stringify({
          id: uuidv4(),
          first_name: firstName,
          last_name: lastName,
          email: registerEmail,
          password: registerPassword,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      if (res.status === 200 || 201) {
        navigate("/")
      } else {
        console.log(`ERROR ${res.status}`)
      }
    } catch (err) {
      console.log(err);
    }
  };
    

  return ( 
    <div>
      <section className={styles.Cover}>
        <div className={styles.Cover__info}>
          <h4>Tired of that meal?</h4>
          <h4>Don't throw it out!</h4>
          <p className={styles.p__foodhero}>Sign up for My Fridge today to become a food hero. It's free!</p>
        </div>
        <div className={styles.Cover__form}>
          <form className={styles.Cover__form} onSubmit={register}>
            <input type="text" name="firstname" className={styles.Cover__form__login} placeholder="First name" onChange={(e)=> setFirstName(e.target.value)} />
            <input type="text" name="lastname" className={styles.Cover__form__login} placeholder="Last name" onChange={(e)=> setLastName(e.target.value)} />
            <input type="email" name="email" className={styles.Cover__form__login} placeholder="E-mail address" onChange={(e)=> setRegisterEmail(e.target.value)} />
            <input type="password" name="password" className={styles.Cover__form__login} placeholder="Password" onChange={(e)=> setRegisterPassword(e.target.value)} />
            <input type="submit" value="SIGNUP" id={styles.Cover__form__btn} />
          </form>
          <br />
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
 
export default SignUp;