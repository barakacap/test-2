// import React, { useState,useEffect,useContext } from "react";

import './App.css'
import App1 from './App1'
import App2 from './App2'
import Policy from './Policy'
import HomeApp from './HomeApp'
import {Route, Routes, Link} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import sTimer from './context/context';

// import { useDispatch, useSelector } from "react-redux";
// import { connect } from "./redux/blockchain/blockchainActions";
// import { fetchData } from "../../redux/data/dataActions";


function App() {

  return (
    // <sTimer.Provider value={{showTimer, setShowTimer}}>
    
    
    <div className="App">
      <ToastContainer className='toast' style={{top:100}} position="top-right" autoClose={5000} closeOnClick />

      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/index1" element={ <App1/>}/>
        <Route path='/index2' element={<App2/>}></Route>
        <Route path='/privacy-policy' element={<Policy/>}></Route>
      </Routes>
    </div>
    // {/* </sTimer.Provider> */}
  );
}
export default App;
