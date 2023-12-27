import Navbar from "~/components/Navbar"
import "~/styles/globals.css"
import Provider from "~/components/Provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pipe Bomb shop",
  description: "Best pipe bomb seller",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
