import { faAddressBook, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './sidebar2.module.scss'

type Sidebar2Props = {

}

const sidebar2 = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faHome} color="#E9C46A"/></div>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faAddressBook} color="#E9C46A"/></div>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faUser} color="#E9C46A"/></div>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faEnvelope} color="#E9C46A"/></div>
    </div>   
    <div>         
 </div>
    </>
    )
}

export default sidebar2
