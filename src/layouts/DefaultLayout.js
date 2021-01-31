import React, { useContext, useEffect } from "react"
import GlobalContexts from "../contexts/GlobalContexts"
import { darkMode, lightMode } from "../theme/mode"
import Head from "next/head"
import { useRouter } from "next/router"
import Bus from "../utils/Bus"
import { Flash } from "../components/shared/Flash"

import { DashboardDisplay, DefaultDisplay } from "./display"

export default function DefaultLayout({ children }) {
   const { theme } = useContext(GlobalContexts)

   const path = useRouter().pathname

   useEffect(() => {
      window.flash = (message, type = "success") => Bus.emit("flash", { message, type })
   }, [])

   const display = (path) => {
      switch (path) {
         case "/user/dashboard":
            return <DashboardDisplay>{children}</DashboardDisplay>

         default:
            return <DefaultDisplay>{children}</DefaultDisplay>
      }
   }

   return (
      <>
         <Head>
            <style>{theme === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         {display(path)}

         <Flash />
      </>
   )
}
