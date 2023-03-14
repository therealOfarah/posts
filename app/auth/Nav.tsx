import Link from "next/link"
import Login from "./Login"
import {getServerSession} from 'next-auth/next'
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import Logged from "./Logged"
export default async function Nav() {
  const session = await getServerSession(authOptions)
  return(
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h2 className="font-bold text-lg">Send it.</h2>
      </Link>
      <ul className="flex items-center gap-6">
        <li>
          {!session?.user && <Login/>}
          {session?.user && <h3>{session.user.name} <Logged/></h3>}
        </li>
      </ul>
    </nav>
  )
};
