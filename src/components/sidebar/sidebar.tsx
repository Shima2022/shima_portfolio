// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.scss'
import Logo from '../../assets/images/logo.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { ImLinkedin, } from 'react-icons/im'
import { FaGithub, FaFileCsv } from 'react-icons/fa'
import { BsHouseFill, BsFillPersonFill, BsFillEnvelopeFill  } from 'react-icons/bs'
import { useModalContext } from '@rintsin/common-components'
import Contact from '../Contact/contact'

const sidebar: React.FC = () => {
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
//contact modali
const Nav: React.FC = () => {
  const { modal } = useModalContext();

  const display = () => {
    modal({
      content: <Contact />,
    });
  }

  return (
    <nav>
      <Link to="/" className={styles.sidebarItem}><BsHouseFill color="#E9C46A" /></Link>
      <Link to="/cv" className={styles.sidebarItem}><FaFileCsv color="#E9C46A" /></Link>
      {/* <Link to="/contact" className={styles.sidebarItem}><BsFillEnvelopeFill color="#E9C46A" /></Link> */}
      <div className={styles.sidebarItem}>
        <BsFillEnvelopeFill onClick={display} color="#E9C46A" />
      </div>
    </nav>
  )
}

const SocialMedia: React.FC = () => {
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
export default sidebar
