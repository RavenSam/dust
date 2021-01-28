import React, { useState, useEffect } from "react"
import ThemeContext from "../contexts/GlobalContexts"
import { darkMode, lightMode } from "../theme/mode"
import Head from "next/head"
import { useRouter } from "next/router"

// Components
import { Header, Modal } from "../components"

export default function DefaultLayout({ children }) {
   const [theme, setTheme] = useState("")
   const [displayModal, setDisplayModal] = useState("none")

   const router = useRouter()

   // Values of Context
   const value = { theme, setTheme, displayModal, setDisplayModal }

   const noNavIn = ["/signup", "/login"] // Do not show nav bar in these pages
   const showNav = !noNavIn.includes(router.pathname)

   useEffect(() => {
      if (localStorage.getItem("Mode") !== null) {
         setTheme(JSON.parse(localStorage.getItem("Mode")))
      } else {
         localStorage.setItem("Mode", JSON.stringify("lightMode"))
      }
   }, [theme])

   return (
      <>
         <Head>
            <style>{theme === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         <ThemeContext.Provider value={value}>
            {showNav && <Header position="fixed" />}

            <Modal />
            <div className="container">{children}</div>
         </ThemeContext.Provider>
      </>
   )
}
