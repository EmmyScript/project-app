import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx' 
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js"
import "./assets/style.css";
import RegistrationPage from './pages/App.tsx';

//import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <RegistrationPage/>
    
    
  </React.StrictMode>,
)
