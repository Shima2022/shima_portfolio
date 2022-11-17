import { faAddressBook, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './sidebar2.module.scss'
import Logo from '../../assets/images/logo.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import LogoSubtitle from '../../assets/images/logo-sub.png'
type Sidebar2Props = {

}

const sidebar2 = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to='/'>
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Profile" /> 
      </Link>
      <Nav />
      <SocialMedia />
    </div>
  )
}
const Nav = () => {
  return (
    <nav>
      <Link to="/" className={styles.sidebarItem}><a><FontAwesomeIcon icon={faHome} color="#E9C46A" /></a></Link>
      <Link to="/cv" className={styles.sidebarItem}><a><FontAwesomeIcon icon={faAddressBook} color="#E9C46A" /></a></Link>
      <Link to="/portfolio" className={styles.sidebarItem}><a><FontAwesomeIcon icon={faUser} color="#E9C46A" /></a></Link>
      <Link to="/contact" className={styles.sidebarItem}><a><FontAwesomeIcon icon={faEnvelope} color="#E9C46A" /></a></Link>
    </nav>
  )
}

const SocialMedia = () => {
  return (
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
  )
}
export default sidebar2
