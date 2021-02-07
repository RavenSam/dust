import { useState, useEffect } from "react"
import { useRouter } from "next/router"

// Components
import { Header } from "../../components"

export default function DefaultDisplay({ children }) {
   const [showNav, setShowNav] = useState(true)

   const router = useRouter()

   const noNavIn = ["/signup", "/login"] // Do not show nav bar in these pages

   useEffect(() => setShowNav(!noNavIn.includes(router.pathname)))

   return (
      <>
         {showNav && <Header position="fixed" />}

         {children}
      </>
   )
}
