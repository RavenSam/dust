import { useState, useEffect, cloneElement } from "react"
import NavUser from "../../components/navUser/NavUser"
import TopNav from "../../components/navUser/TopNav"
import userProfile from "../../utils/user_profile"
import LoadingPage from "../../components/shared/LoadingPage"

export default function DashboardDisplay({ children }) {
   const [user, setUser] = useState(null)
   const [tab, setTab] = useState(1)

   useEffect(() => setUser(userProfile.getUser()), [])

   if (!user) return <LoadingPage />

   return (
      <>
         <NavUser user={user} setTab={setTab} tab={tab} />

         <main className="dashboard-content">
            <TopNav user={user} />

            <div style={{ paddingTop: "5rem" }}></div>

            {cloneElement(children, { tab })}
         </main>
      </>
   )
}
