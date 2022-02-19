import React from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from "./containers/Login";
import "./containers/Login.css";

import "./NewLogin";
import "./style.css";
import "./Multiuser_Login_Page.css";
import "./Newindex";
import NewLogin from "./NewLogin";
import Microsoftsignin from "./Microsoftsignin";
import { config } from "./Config";
import { PublicClientApplication } from '@azure/msal-browser';
import Multiuser_Login_Page from "./Multiuser_Login_Page";

function App() {
  return (
    <div className="App" >
      
    
      <Router>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Multiuser_Login_Page' element={<Multiuser_Login_Page/>} />
      
            </Routes>
      </Router>
    </div>
  );
}

export default App;
