import React from 'react';
import './App.css';
import Routes from './Routes'
import nodemailer from 'nodemailer'


function App() {
  const smtpTranspor = nodemailer.createTransport({
    host: "mail.municipia.com.mx",
    port:465,
    secure: true,
    auth: {
        user: "hola@municipia.com.mx",
        password: "holamunicipia1."
    }
  })
  
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
