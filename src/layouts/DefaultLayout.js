import React, { useContext, useEffect } from "react"
import GlobalContexts from "../contexts/GlobalContexts"
import { darkMode, lightMode } from "../theme/mode"
import Head from "next/head"
import { useRouter } from "next/router"
import themeMode from "../utils/theme_mode"
import Bus from "../utils/Bus"
import { Flash } from "../components/shared/Flash"
import NavUser from "../components/navUser/NavUser"

// Components
import { Header } from "../components"

export default function DefaultLayout({ children }) {
   const { theme } = useContext(GlobalContexts)

   const router = useRouter()

   const noNavIn = ["/signup", "/login"] // Do not show nav bar in these pages
   const showNav = !noNavIn.includes(router.pathname)

   useEffect(() => {
      window.flash = (message, type = "success") => Bus.emit("flash", { message, type })
   }, [])

   if (router.pathname === "/user/dashboard") {
      return (
         <>
            <Head>
               <style>{themeMode.getMode() === "darkMode" ? darkMode : lightMode}</style>
            </Head>

            <NavUser />

            <main className="dashboard-content">
               <Header position="fixed" />

               <div style={{ paddingTop: "5rem" }}></div>

               {children}
            </main>

            <Flash />
         </>
      )
   }

   return (
      <>
         <Head>
            <style>{themeMode.getMode() === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         {showNav && <Header position="fixed" />}

         {showNav && <div style={{ paddingTop: "5rem" }}></div>}

         {children}

         <Flash />
      </>
   )
}
