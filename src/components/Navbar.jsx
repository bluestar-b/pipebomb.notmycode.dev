"use client"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

const Navbar = () => {
  const { data: session } = useSession()

  const buttonStyles =
    "hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 text-sm md:text-lg font-semibold md:font-bold group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors"

  return (
    <>
      <nav className="navbar relative z-10 flex max-w-max items-center p-2">
        <div style={{ position: "relative" }}>
          <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
            <li>
              <Link href="/" className={buttonStyles}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={buttonStyles}>
                Products
              </Link>
            </li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className={buttonStyles}>
                Contact us
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-lg border-2 bg-black p-2 text-lg font-bold shadow"
              >
                <li>
                  <Link href="https://discord.gg/nKxGwhNhMe">Discord</Link>
                </li>
                <li>
                  <Link href="">Email</Link>
                </li>
              </ul>
            </div>
          </ul>

          <div className="fixed right-0 p-2">
            <div className="avatar">
              <div className="w-11 rounded-full">
                <img
                  src="https://avatars.githubusercontent.com/u/105431607?v=4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
