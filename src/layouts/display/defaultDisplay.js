import { useRouter } from "next/router"

// Components
import { Header } from "../../components"

export default function DefaultDisplay({ children }) {
   const router = useRouter()

   const noNavIn = ["/signup", "/login"] // Do not show nav bar in these pages
   const showNav = !noNavIn.includes(router.pathname)

   return (
      <>
         {showNav && <Header position="fixed" />}

         {showNav && <div style={{ paddingTop: "5rem" }}></div>}

         {children}
      </>
   )
}
