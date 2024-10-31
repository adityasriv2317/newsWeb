import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

  let is = 0
  let toggleMenu = () => {
    let items = document.querySelector('.menuBar')
    let button = document.querySelector('.menu')

    if(is == 0){
      items.style.display='none'
      button.style.color='white'
      is = 1
    }
    else{
      items.style.display='block'
      button.style.color='red'
      is = 0
    }
  }

  return (
    <div className='header relative z-10 bg-black text-[2vw] max-md:text-[1.3em] flex text-white justify-between px-[2vw] shadow-slate-500 font-poppins'>

        <div className="left flex items-center">
      
          <Link to='/' className="logo mr-[2vw] bg-black-500 flex items-center cursor-pointerz px-[0.8vw] h-full cursor-pointer">
            <img src={props.logo} alt="" className='w-[5vw] max-md:w-[10vw] pt-[0.5vw] mr-[0.5vw]'/>
            {props.name}
          </Link>
          <Link to='/account' className="acc text-[1.5vw] cursor-pointer hover:bg-red-700 px-[0.7vw] flex items-center h-full max-md:hidden">
            Account
          </Link>
        </div>
      
        <div className="right, text-[1.8vw] flex items-center max-md:hidden">
          <ul className='list-none gap-[2vw] m-auto flex h-full parent-div'>
            <Link to='/login' className='links cursor-pointer hover:bg-red-700 px-[1vw] flex items-center'>Login</Link>
            <Link to='/signup' className='links cursor-pointer hover:bg-red-700 px-[1vw] flex items-center'>SignUp</Link>
          </ul>
        </div>

        <div className="menu text-[4vw] max-md:flex hidden absolute right-[4vw] top-[0.7em] items-center cursor-pointer" onClick={toggleMenu}>&#9776;</div>
        <div className="menuBar hidden">
          <ul className='list-none gap-[2vw] m-auto flex:col parent-div absolute right-[0.5vw] top-[10.5vw] p-[2vh] bg-black'>
            <Link to='/account' onClick={toggleMenu} className='links cursor-pointer hover:bg-red-700 px-[1vw] flex justify-center items-center mb-[30px]'>Account</Link>
            <Link to='/login' onClick={toggleMenu} className='links cursor-pointer hover:bg-red-700 px-[1vw] flex justify-center items-center mb-[10px]'>Login</Link>
            <Link to='/signup' onClick={toggleMenu} className='links cursor-pointer hover:bg-red-700 px-[1vw] flex justify-center items-center'>SignUp</Link>
          </ul>
        </div>
    
    </div>
  )
}

export default Header