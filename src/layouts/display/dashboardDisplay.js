import NavUser from "../../components/navUser/NavUser"

// Components
import { Header } from "../../components"

export default function DashboardDisplay({ children }) {
   return (
      <>
         <NavUser />

         <main className="dashboard-content">
            <Header position="fixed" />

            <div style={{ paddingTop: "5rem" }}></div>

            {children}
         </main>
      </>
   )
}
