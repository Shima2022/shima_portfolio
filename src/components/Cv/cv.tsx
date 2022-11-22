import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}> 
      <h1 className='title'>CURRICULUM VITAE</h1>
            <h2>EDUCATION</h2>
            <p>2021 - 2024</p>
            <h3>Vantaan ammattiopisto, Varia</h3>
            <h3> Sofware developer </h3> 

    </div>
  )
}

export default Cv
