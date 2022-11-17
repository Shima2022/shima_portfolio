import React from 'react'
import styles from './home.module.scss'

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>HELLO!<br />  
        Welcome to my page. My name is Shm <br />
        I am software developer student</h1> 
        <br />
        <h2>
        Software developer
        </h2>
      </div>
  )
}

export default Home