import React from 'react'
import styles from './home2.module.scss'

type Home2Props = {

}

const Home2: React.FC<Home2Props> = () => {
  return (
    <div className={styles.container}>
      <h1>HELLO!</h1>
       <h2>Welcome to my page. My name is Shm. <br />
        I am software developer student.</h2>
        <br />
        <h3>
          Software developer
        </h3>
      </div>
  )
}

export default Home2
