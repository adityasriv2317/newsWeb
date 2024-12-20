import React, { useState, useEffect } from 'react'
import { currentUser, refresh } from './LoginComp'

let url = 'https://e-learning-slfj.onrender.com/user/profile/'
let logoutUrl = 'https://e-learning-slfj.onrender.com/user/logout/'

const User = () => {
  // console.log(currentUser, refresh)  

  const [uname, setName] = useState('')
  const [umail, setMail] = useState('')
  const [prompt, setPrompt] = useState('')

  console.log(currentUser);
  
  useEffect(() => {

    let userAcc = () => {
      
      fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': currentUser,
        }
      })
      .then((response) => {
        if(response.ok){
          return response.json()
        }
      })
      .then((data) => {
        setName(data.fullname)
        setMail(data.email)
        console.log(data);
      })
    }

    userAcc()
    
  }, [currentUser])

  let logOut = async (e) =>  {

    e.preventDefault()

    await fetch(logoutUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': currentUser,
      }
    })
    
    setMail('')
    setName('')
    setPrompt('Logged out successfully.')
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-[2em] font-semibold text-black mb-6">Account</h1>

      <div className="bg-white p-[4vw] w-full max-w-md border border-gray-300">
        <form className="space-y-8 text-xl flex flex-col items-center">
          <p className='text-red-600'>{prompt}</p>
          <div>
            <label htmlFor="name" className="block text-center font-medium text-gray-700">Name:</label>
            <p>{uname ? uname : ''}</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-center font-medium text-gray-700">Email:</label>
            <p>{umail ? umail : ''}</p>
          </div>

          <button type="submit" onClick={logOut} className="px-[2em] mt-[200px] bg-black text-white font-semibold py-2 hover:bg-red-700" >Log Out</button>
        </form>
      </div>
    </div>
  )
}

export default User