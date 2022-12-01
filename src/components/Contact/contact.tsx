import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import styles from './contact.module.scss'


const Contact: React.FC = () => {

  //UseRef allows to persist values between renders.
  const form = useRef<HTMLFormElement>(null);
  //preventDefault cancels the event if it is cancelable.
  const sendEmail = (e: { preventDefault: () => void; }) => {
    if (!form.current) return;
    
    emailjs.sendForm(
      "service id",
      "template id",
      form.current,
      "user id"
    )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className={styles.container}>
      <h1>
        Contact Me
      </h1> 
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <section>
          <label>Name</label>
          <input type='text' name='name' />
        </section>
        <section>
          <label>Email</label>
          <input type='email' name='mail' />
        </section>
        <section>
          <label>Message</label>
          <textarea name='message' />
        </section>
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}

export default Contact

