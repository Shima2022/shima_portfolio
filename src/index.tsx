import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cv from './components/Cv/cv';
import './index.module.scss';
import { ModalContextProvider } from '@rintsin/common-components';
import Sidebar from './Sidebar/sidebar';
import Home from './components/Home/home'

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