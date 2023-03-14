"use client"
import {signIn} from 'next-auth/react'
export default function Login() {
  return(
    <li className='list-none'>
      <button className="text-sm bg-grey-700 text-whitw py-2 px-6 rounded-xl disabled:opacity-25"onClick={()=>signIn()}>Sign In</button>
    </li>
  )
};
