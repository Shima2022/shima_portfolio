import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (

    <div>
      <div className={styles.star}></div>
      <link rel="stylesheet" type="text/css" href="style.css" />
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
     

        <div className={styles.container}>
          <h1>
            CURRICULUM VITAE
          </h1>
          <div className={styles.cvSection}></div>
          <h2>EDUCATION</h2>
          <p>Vantaa Vocational College, Varia<br></br>
            Sofware developer</p>

          <br></br>
          <div className={styles.cvSection}>
            <h3>Work</h3>
            <p>Unity games <br></br>
              Varia project</p>
          </div>
        </div>
        {/* <a download="" href="#" className="button home_button">Download Resume</a> */}
      </div>
  )
}

export default Cv