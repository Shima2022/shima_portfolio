import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/contact';
import Cv from './components/Cv/cv';
import './index.module.scss';
import Home2 from './components/testailua/home2';
import Sidebar2 from './components/testailua/sidebar2';
import AboutMe from './components/AboutMe/aboutMe';
import { ModalContextProvider } from '@rintsin/common-components';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <Router>
        <Sidebar2 />
        <main>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Home2 />} />
            <Route path='/cv' element={<Cv />} />
            <Route path='/aboutMe' element={<AboutMe />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
          </Routes>
        </main>
      </Router>
    </ModalContextProvider>
  </React.StrictMode>
);