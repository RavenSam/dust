import { useEffect } from "react"
import dynamic from "next/dynamic"
import userProfile from "../../utils/user_profile"
import LoadingPage from "../../components/shared/LoadingPage"

// Tabs
const DashboardTab = dynamic(() => import("../../components/tabs/DashboardTab"))
const BookmarkTab = dynamic(() => import("../../components/tabs/BookmarkTab"))
const HistoryTab = dynamic(() => import("../../components/tabs/HistoryTab"))
const SettingsTab = dynamic(() => import("../../components/tabs/SettingsTab"))

import styles from "../../styles/user/Dashboard.module.scss"

export default function Dashboard({ user, tab }) {
   const { setUser, getUser } = userProfile

   useEffect(() => {
      if (user) {
         setUser(user)
      }
   }, [user])

   if (!user) return <LoadingPage />

   switch (tab) {
      case 2:
         return <BookmarkTab />

      case 3:
         return <HistoryTab />

      case 4:
         return <SettingsTab />

      default:
         return <DashboardTab />
   }
}

export async function getServerSideProps({ req }) {
   const user = req.user ? JSON.stringify(req.user) : null

   // filter the password from the user
   const useNoPw = Object.fromEntries(Object.entries(JSON.parse(user)).filter(([key, value]) => key !== "password"))

   if (!user) {
      return {
         redirect: {
            destination: "/login",
            permanent: false,
         },
      }
   }

   return {
      props: { user: useNoPw },
   }
}
