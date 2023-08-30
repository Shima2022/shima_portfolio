import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <>   
    {/* bubble animation */}
    <div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
    </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
    </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
    </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
    </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
    </div>

      {/* Cv */}
        <div className={styles.container}>
          <h1>CURRICULUM VITAE</h1>
          
          <div className={styles.cvSection}>
          <h2>Education & Experience</h2>
          <p>Vantaan ammattiopisto Varia</p>
          <p>Tieto- ja viestintätekniikan perustutkinto/Sofware developer</p>  
          </div>

          <div className={styles.cvSection}>
          <p>Varia-ict/conference-room-display</p>
          <p>SQLInjection</p> 
          <p>Kyberturvallisuus verkkosivu (wordpress)</p>
          <p>ABB i-buss KNX Switch Actuator/backend/Lokkit Oy </p>
          </div>
        </div>
      </div>
      </>
  )
}

        export default Cv