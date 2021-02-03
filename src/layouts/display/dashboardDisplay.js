import { useState, useEffect } from "react"
import NavUser from "../../components/navUser/NavUser"
import TopNav from "../../components/navUser/TopNav"
import userProfile from "../../utils/user_profile"
import Loader from "react-loader-spinner"

export default function DashboardDisplay({ children }) {
   const [user, setUser] = useState(null)

   useEffect(() => setUser(userProfile.getUser()), [])

   if (!user) {
      return (
         <Loader
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            type="ThreeDots"
            color="var(--color-primary)"
            height={80}
            width={80}
         />
      )
   }

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
