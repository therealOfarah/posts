'use client'
import Image from "next/image"
import {signOut} from "next-auth/react"
import Link from "next/link"

export default function Logged() {
  return(
    <li>
      <button onClick={()=>signOut()}>Log out</button>
    </li>
  )
}
