import React, { useEffect, useState } from 'react'
import styles from './contact.module.scss'
import FirebaseServices from '../../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'

const Contact: React.FC = () => {

  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

  const [OK, setOK] = useState<Boolean>(false)

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //

    const docRef = await addDoc(collection(FirebaseServices.FirestoreInstance, "messages"), {
      name: name,
      mail: email,
      message: message,
    })

    setOK(!!docRef.id)

  }

  useEffect(() => {
    if (!OK) return;
    alert("Lähetys onnistui")
  }, [OK])

  return (
    
    <div className={styles.container}>
        <h1>
          Contact Me
        </h1>
        <form className={styles.form} onSubmit={(e) => handleSend(e)}>
          <section>
            <label>Name</label>
            <input
              type='text'
              required
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </section>
          <section>
            <label>Email</label>
            <input
              type='email'
              required
              name='mail'
              value={email}
              onChange={(e) => setemail(e.target.value)} />
          </section>
          <section>
            <label>Message</label>
            <textarea
              name='message'
              required
              value={message}
              onChange={(e) => setmessage(e.target.value)} />
          </section>
          <input type='submit' value='Send' />
        </form>
      </div>
  )
}

export default Contact

