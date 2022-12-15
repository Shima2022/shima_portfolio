import React from 'react'
import styles from './animatedLogo.module.scss'

type AnimatedLogoProps = {
    imgSrc: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ imgSrc }) => {
  return <img src={imgSrc} className={styles.container} />
}

export default AnimatedLogo
