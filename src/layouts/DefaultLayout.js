import React, { useState } from "react"
import ThemeContext from "../contexts/ThemeContext"
import { darkMode, lightMode } from "../theme/mode"
import Head from "next/head"
import { useRouter } from "next/router"

// Components
import { Header, Modal } from "../components"

export default function DefaultLayout({ children }) {
   const [theme, setTheme] = useState("darkMode")
   const [displayModal, setDisplayModal] = useState("none")

   const router = useRouter()

   // Values of Context
   const value = { theme, setTheme, displayModal, setDisplayModal }

   const noNavIn = ["/sign-up", "/log-in"] // Do not show nav bar in these pages
   const showNav = !noNavIn.includes(router.pathname)

   return (
      <>
         <Head>
            <style>{theme === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         <ThemeContext.Provider value={value}>
            {showNav && <Header position="sticky" />}

            <Modal />

            {children}
         </ThemeContext.Provider>
      </>
   )
}
