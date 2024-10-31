import React from 'react'

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
    <div className='header bg-black text-[2vw] max-md:text-[4vw] flex text-white justify-between px-[2vw] h-[5vw] max-md:h-[10vw] shadow-slate-500 font-poppins'>

        <div className="left flex items-center">
      
          <div className="logo mr-[2vw] bg-black-500 flex items-center cursor-pointerz px-[0.8vw] h-full cursor-pointer">
            <img src={props.logo} alt="" className='w-[5vw] max-md:w-[10vw] pt-[0.5vw] mr-[0.5vw]'/>
            {props.name}
          </div>
          <div className="acc text-[1.5vw] cursor-pointer hover:bg-red-700 px-[0.7vw] flex items-center h-full max-md:hidden">
            Account
          </div>
        </div>
      
        <div className="right, text-[1.8vw] flex items-center max-md:hidden">
          <ul className='list-none gap-[2vw] m-auto flex h-full parent-div'>
            <li className='cursor-pointer hover:bg-red-700 px-[1vw] flex items-center'>Login</li>
            <li className='cursor-pointer hover:bg-red-700 px-[1vw] flex items-center'>SignUp</li>
          </ul>
        </div>

        <div className="menu text-[4vw] max-md:flex hidden absolute right-[4vw] top-[2vw] items-center cursor-pointer" onClick={toggleMenu}>&#9776;</div>
        <div className="menuBar hidden">
          <ul className='list-none gap-[2vw] m-auto flex:col parent-div absolute right-[0.5vw] top-[10.5vw] p-[2vh] bg-black'>
            <li className='cursor-pointer hover:bg-red-700 px-[1vw] flex justify-center items-center mb-[50px]'>Account</li>
            <li className='cursor-pointer hover:bg-red-700 px-[1vw] flex justify-center items-center'>Login</li>
            <li className='cursor-pointer hover:bg-red-700 px-[1vw] flex justify-center items-center'>SignUp</li>
          </ul>
        </div>
    
    </div>
  )
}

export default Header