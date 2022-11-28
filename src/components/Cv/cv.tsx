  import React from 'react'
 import styles from './cv.module.scss'

 type CvProps = {

 }

 const Cv: React.FC<CvProps> = () => {
   return (
      <div className={styles.container}>
          <h1>CURRICULUM VITAE</h1>
       <div className={styles.cvSection}></div>
          <h2>EDUCATION</h2>
            Vantaa Vocational College, Varia
             <p>
               Sofware developer
            </p>
       <br></br>
       <br></br>
       <div className={styles.cvSection}>
            <h3>Work</h3>
       </div>
     </div>
  )
}


export default Cv
