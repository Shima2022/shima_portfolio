import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/contact';
import Cv from './components/Cv/cv';
import Project from './components/Project/project';
// import Home from './components/Home/home';
// import Sidebar from './components/sidebar/sidebar';
// import styles from './index.module.scss';
import './index.module.scss';
import Home2 from './components/testailua/home2';
import Sidebar2 from './components/testailua/sidebar2';
//import Sidebar2 from './components/testailua/sidebar2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        {/* <Sidebar /> */}
      </header>
      <Sidebar2 />
      <main>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home2 />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/portfolio' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);