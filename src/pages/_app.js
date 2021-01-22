import { useState } from "react"
import Head from "next/head"
import { AnimatePresence } from "framer-motion" // For Animation
import ThemeContext from "../contexts/ThemeContext"
import { darkMode, lightMode } from "../theme/mode"

// Stylesheets
import "../styles/global.scss"

export default function MyApp({ Component, pageProps, router }) {
   const [theme, setTheme] = useState("darkMode")
   const [displayModal, setDisplayModal] = useState("none")

   const value = { theme, setTheme, displayModal, setDisplayModal }

   return (
      <>
         <Head>
            <style>{theme === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         <AnimatePresence exitBeforeEnter>
            <ThemeContext.Provider value={value} key={router.route}>
               <Component {...pageProps} />
            </ThemeContext.Provider>
         </AnimatePresence>
      </>
   )
}
