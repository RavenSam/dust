// Components
import { Header, Footer } from "../../components"

export default function DefaultDisplay({ children }) {
   return (
      <>
         <Header position="fixed" />

         {children}

         <Footer />
      </>
   )
}
