import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}> 
      <h1 className='title'>CURRICULUM VITAE</h1>
            <h2>EDUCATION</h2>
              <p>
               Vantaan ammattiopisto, Varia 
              </p>    
              <p>
                Sofware developer
              </p>        
            
            <h3> WORK </h3> 
    </div>
  )
}

export default Cv
