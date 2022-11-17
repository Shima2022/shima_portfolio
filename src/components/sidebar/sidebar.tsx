import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './sidebar.module.scss'

const Sidebar = () => {
    return (
        <div>
                <div className={styles.container}>
                    <div>className={styles.sidebarItem}<FontAwesomeIcon icon={faHome} color="#E9C46A"/></div>
                    <div>classNmae={styles.sidebarItem}<FontAwesomeIcon icon={faAddressBook} color="#E9C46A"/></div>
                    <div>classNmae={styles.sidebarItem}<FontAwesomeIcon icon={faUser} color="#E9C46A"/></div>
                    <div>classNmae={styles.sidebarItem}<FontAwesomeIcon icon={faEnvelope} color="#E9C46A"/></div>
                </div>
            <ul>
                <li>
                    {/*Linkedin icon */}
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/shima-h/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    {/*Github icon */}
                    <a target="_blank" rel='noreferrer' href='https://github.com/Shima2022'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar
