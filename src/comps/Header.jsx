import React from 'react'

const Header = (props) => {
  return (
    <div className='header bg-blue-800 text-[2vw] flex text-white justify-between px-[2vw] h-[4vw] shadow-slate-500 font-poppins'>

        <div className="left flex items-center">
      
          <div className="logo mr-[2vw] bg-yellow-500 flex items-center cursor-pointerz px-[0.8vw] h-full">
            <img src={props.logo} alt="" className='h-[5vw] pt-[0.8vw] mr-[0.5vw]'/>
            The Daily Bugle
          </div>
          <div className="acc text-[1.5vw] cursor-pointer bg-yellow-500 px-[0.7vw] flex items-center h-full">
            Account
          </div>
        </div>
      
        <div className="right, text-[1.8vw] flex items-center">
          <ul className='list-none gap-[2vw] m-auto flex h-full parent-div'>
            <li className='cursor-pointer bg-yellow-500 px-[1vw] flex items-center'>Login</li>
            <li className='cursor-pointer bg-yellow-500 px-[1vw] flex items-center'>SignUp</li>
          </ul>
        </div>
    
    </div>
  )
}

export default Header