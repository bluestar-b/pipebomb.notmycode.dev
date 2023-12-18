import Navbar from "~/components/Navbar"
import "~/styles/globals.css"

export const metadata = {
  title: "Pipe Bomb shop",
  description: "Best pipe bomb seller",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  )
}
