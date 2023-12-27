"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function UserSection() {
  const btnStyles =
    "hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 text-lg font-bold group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-color"
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session.user.name}

        <button className={btnStyles} onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      <button className={btnStyles} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  )
}
