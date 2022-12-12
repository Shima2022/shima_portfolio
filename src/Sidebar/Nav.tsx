import React from 'react'
import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';
import { FaFileCsv } from 'react-icons/fa';
import { BsHouseFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { useModalContext } from '@rintsin/common-components';
import Contact from '../components/Contact/contact';

//contact modali
export const Nav: React.FC = () => {
  const { modal } = useModalContext();

  const display = () => {
    modal({
      content: <Contact />,
    });
  };

  return (
    <nav>
      <Link to="/" className={styles.sidebarItem}><BsHouseFill color="#DBBEA1FF" /></Link>
      <Link to="/cv" className={styles.sidebarItem}><FaFileCsv color="#DBBEA1FF" /></Link>
      <div className={styles.sidebarItem}>
        <BsFillEnvelopeFill onClick={display} color="#DBBEA1FF" />
      </div>
    </nav>

  );
};
