import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from './comps/Header'
import PageBody from './comps/PageBody'
import SignupComp from './comps/SignupComp'
import LoginComp from './comps/LoginComp'
import User from './comps/User'

import logo from '/tdb.png'
let name = "The Daily Bugle"

function App() {

  return (
    <div className='transition-all ease-in-out'>
      {/* router */}
      <Router className='m-0 p-0 font-roboto'>
        {/* header - navigation bar */}
        <Header logo={logo} name={name}/>

        <Routes>
          <Route exact path="/" element={<PageBody />} />
          <Route exact path="/login" element={<LoginComp />} />
          <Route exact path="/signup" element={<SignupComp />} />
          <Route exact path="/account" element={<User />} />
        </Routes>
      </Router> 
      
    </div>

  )
}

export default App
