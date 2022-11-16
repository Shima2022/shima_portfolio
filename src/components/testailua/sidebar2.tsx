import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './sidebar2.module.scss'

type Sidebar2Props = {

}

const sidebar2 = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faHome} color="#E9C46A" /></div>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faAddressBook} color="#E9C46A" /></div>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faUser} color="#E9C46A" /></div>
      <div className={styles.sidebarItem}><FontAwesomeIcon icon={faEnvelope} color="#E9C46A" /></div>
    </div>   
    <div>         
          <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/shima-h/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/Shima2022'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    </>
    )
}

export default sidebar2
