import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4, faMagnifyingGlass, faCarrot, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faFaceLaughBeam, faCartShopping, faHandshake, faUtensils } from '@fortawesome/free-solid-svg-icons';



const SignUp = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [success, setSuccess] = useState("")

  let navigate = useNavigate();

  const register = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    

    const postNewUser = { firstName, lastName, registerEmail, registerPassword }
    
    try {
      await fetch("https://fridge-mongodb.onrender.com/api/new-user", {
        method: "POST",
        body: JSON.stringify(postNewUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
      });
      alert("Welcome to MyFridge! You be redirected to the login shortly...")
      setTimeout(() => {
        navigate("/")
      }, 5000);
    } catch (err) {
      console.log(err);
      //show modal
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
          <p className={styles.successMsg}>{success}</p>
          <br />
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
      <section id="about" className={styles.About}>
        <div className={styles.About__div__data}>
            <p className={styles.About__data}>Did you know that the amount of food that goes to waste only in Sweden <span className={styles.highlight}>could 
              fill the Avicii Arena four times?</span> Let us change that and start a <span className={styles.highlight}>food revolution!</span></p>
            <p className={styles.About__data_2}>Source: IVL Swedish Environmental Research Institute</p>
          </div>
        <br />
          <h4 className={styles.About__title}>Here's how it works</h4>
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
    </div>
   );
}
 
export default SignUp;