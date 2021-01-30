import React, { useContext, useEffect } from "react"
import GlobalContexts from "../contexts/GlobalContexts"
import { darkMode, lightMode } from "../theme/mode"
import Head from "next/head"
import { useRouter } from "next/router"
import themeMode from "../utils/theme_mode"
import Bus from "../utils/Bus"
import { Flash } from "../components/shared/Flash"

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

   return (
      <>
         <Head>
            <style>{themeMode.getMode() === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         {showNav && <Header type="dark" position="fixed" />}

         <div className="container">{children}</div>

         <Flash />
      </>
   )
}
