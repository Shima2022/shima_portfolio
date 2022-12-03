import React from 'react'
import styles from './home.module.scss'

type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    
    <div className={styles.container}>
      <body>
        <h1>
          <span>H</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>O</span>
          <span>!</span>
        </h1>
      </body>    
      <h2>Welcome to my page.My name is Shm.<br />
        I am software developer student.</h2>
      <br />
      <h3>
        Software developer
      </h3>
    </div>
  )
}
export default Home