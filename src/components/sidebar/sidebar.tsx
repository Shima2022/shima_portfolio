import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './sidebar.module.scss'

const Sidebar = () => {
    return (
        //This going default home-page
        <div className="nav-bar">
            <Link className="logo" to='/'>
                {/* <img src={Logo} alt="logo" /> */}
            {/* <img className="sub-logo" src={LogoSubtitle} alt="Profile" /> */}
            </Link>
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
