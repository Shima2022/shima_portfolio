import styles from './contact.module.scss'
import React, { useState } from "react"

const FORM_ENDPOINT = ""

const Contact = () => {
  <div className={styles.container}></div>
  const [submitted, setsubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout ( () => {
      setsubmitted(true);
    }, 100);
  }

  if (submitted) {
    return (
      <><>
        <h1>Thank you!</h1>
      </></> 
  );
}
  
  return (
    
      <form 
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      >
        <><div>
      <input type="text" placeholder='name' name='name' required />
    </div><div>
        <input type="email" placeholder='email' name='email' required />
      </div><div>
        <input placeholder="Subject" type="text" name="Subject" required />
      </div><div>
        <textarea placeholder="Message" name="Message" required></textarea>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </div></>  
      </form> 
        
    )
  }

export default Contact
