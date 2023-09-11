import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './compoents/home/home';
import Login from './compoents/login/login';
import Signup from './compoents/signup/signup';
import { auth } from './firebase';
function App() {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        const token = await user.getIdToken()
        console.log("JWT TOKWN:",token)
        setUserName(user.displayName);
      }else setUserName("");
    });
  },[]);
  return (
    <div className="App">
      {/* <div className='App-header ' >hii i</div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
