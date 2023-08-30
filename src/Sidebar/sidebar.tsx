import React from 'react'
import styles from './sidebar.module.scss'
import { SocialMedia } from './SocialMedia'
import { Nav } from './Nav'

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>S</h1>
      <Nav />
      <SocialMedia />
    </div>
  )
}
export default Sidebar
