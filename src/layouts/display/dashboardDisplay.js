import { useState, useEffect } from "react"
import NavUser from "../../components/navUser/NavUser"
import TopNav from "../../components/navUser/TopNav"
import userProfile from "../../utils/user_profile"

export default function DashboardDisplay({ children }) {
   const [user, setUser] = useState(null)

   useEffect(() => setUser(userProfile.getUser()), [])

   return (
      <>
         <NavUser user={user} />

         <main className="dashboard-content">
            <TopNav user={user} />

            <div style={{ paddingTop: "5rem" }}></div>

            {children}
         </main>
      </>
   )
}
