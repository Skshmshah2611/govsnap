import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './compoents/home/home';
import Login from './compoents/login/login';
import Signup from './compoents/signup/signup';
import Portal from './compoents/portal/portal';
import { auth } from './firebase';

function App() {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(async(userName)=>{
      if(userName){
        const token = await userName.getIdToken()
        console.log("JWT TOKWN:",token)
        setUserName(userName.displayName);
      }else setUserName("");
    });
  },[]);
  return (
    
      <div>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home name={userName}/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/login/portal" element={<Portal name={userName}/>}></Route>
       </Routes>
    </Router>
      </div>
  );
}

export default App;
