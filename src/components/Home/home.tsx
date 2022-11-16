import React from 'react'
import styles from './home.module.scss'

type Home2Props = {

}

const Home: React.FC<Home2Props> = () => {
  return (
    <div className={styles.container}>
      <h1>HELLO! <br/>Welcome to my page. My name is Shm
        <br />
        I am software developer student
        </h1>
        {/*What i do*/}
        <h2>Software developer</h2>
      </div>

  )
}

export default Home