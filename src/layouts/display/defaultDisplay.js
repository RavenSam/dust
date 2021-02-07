// Components
import { Header } from "../../components"

export default function DefaultDisplay({ children }) {
   return (
      <>
         <Header position="fixed" />

         {children}
      </>
   )
}
