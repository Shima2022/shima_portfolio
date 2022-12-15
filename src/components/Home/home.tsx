import React from 'react'
import styles from './home.module.scss'
import img from '../../assets/img/css.png'
import img2 from '../../assets/img/html.png'
import img3 from '../../assets/img/js.png'
import img4 from '../../assets/img/react.png'



type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (

        <div>
          <div className={styles.logo}>
        <img src={img} className='logo' alt="logo" />
        <img src={img2} alt="html" />
        <img src={img3} alt="js" />
        <img src={img4} alt="react" />
        </div>


      {/* toggle */}
      <div>
        <input type="checkbox" id="darkmode-toggle" />
        <label htmlFor="darkmode-toggle" />
        <input type="checkbox" id="darkmode-toggle" />
        <label htmlFor="darkmode-toggle">
        </label>
        <div className="background"></div>



      <div className={styles.container}>
        <div>
          <h1>
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>O</span>
            <span>!</span>
          </h1>
        </div>

        <h2>Welcome to my page.My name is Shima.<br />
          I am software developer student.</h2>
        <br />
        <h3>
          Software developer
        </h3>
      </div>
      </div>
      </div>
  )
}

export default Home