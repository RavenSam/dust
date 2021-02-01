import NavUser from "../../components/navUser/NavUser"
import TopNav from "../../components/navUser/TopNav"

export default function DashboardDisplay({ children }) {
   return (
      <>
         <NavUser />

         <main className="dashboard-content">
            <TopNav />

            <div style={{ paddingTop: "5rem" }}></div>

            {children}
         </main>
      </>
   )
}
