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
          
          <div className={styles.cvSection}></div>
          <h2>EDUCATION</h2>

              <p>Vantaa Vocational College, Varia</p>
                <br></br>
              <p>Sofware developer</p>  
                <br></br>

          <div className={styles.cvSection}>
          <h3>Work</h3>
              <p>Unity games</p> 
                <br></br>
               <p> Varia project</p>
          </div>
        </div>
      </div>
      </>
  )
}

        export default Cv