import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cv from './components/Cv/cv';
import './index.module.scss';
import Home from './components/Home/home';
import { ModalContextProvider } from '@rintsin/common-components';
import Sidebar from './components/Sidebar/sidebar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <Router>
        <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cv' element={<Cv />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
          </Routes>
      </Router>
    </ModalContextProvider>
  </React.StrictMode>
);