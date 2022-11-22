// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './sidebar2.module.scss'
import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { ImLinkedin, } from 'react-icons/im'
import { FaGithub, FaFileCsv } from 'react-icons/fa'
import { BsHouseFill, BsFillPersonFill, BsFillEnvelopeFill  } from 'react-icons/bs'


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
      <Link to="/" className={styles.sidebarItem}><a><BsHouseFill color="#E9C46A" /></a></Link>
      <Link to="/cv" className={styles.sidebarItem}><a><FaFileCsv color="#E9C46A" /></a></Link>
      <Link to="/portfolio" className={styles.sidebarItem}><a><BsFillPersonFill color="#E9C46A" /></a></Link>
      <Link to="/contact" className={styles.sidebarItem}><a><BsFillEnvelopeFill color="#E9C46A" /></a></Link>
    </nav>
  )
}

const SocialMedia = () => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: '30px 0',
      gap: '20px',
    }}>
      <a href="https://www.linkedin.com/in/shima-h/"><ImLinkedin color="darkgrey" size={20}/></a>
      <a href="https://github.com/Shima2022"><FaGithub color="darkgrey" size={20}/></a>
    </div>
  )
}
export default sidebar2
