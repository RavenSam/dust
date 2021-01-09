import { useState } from "react"
import Head from "next/head"
import { AnimatePresence } from "framer-motion" // For Animation
import ThemeContext from "../contexts/ThemeContext"
import { darkMode, lightMode } from "../theme/mode"

// Stylesheets
import "../styles/global.scss"

export default function MyApp({ Component, pageProps, router }) {
   const [theme, setTheme] = useState("darkMode")

   return (
      <>
         <Head>
            <style>{theme === "darkMode" ? darkMode : lightMode}</style>
         </Head>

         <AnimatePresence exitBeforeEnter>
            <ThemeContext.Provider value={{ theme, setTheme }} key={router.route}>
               <div className={theme}>
                  <Component {...pageProps} />
               </div>
            </ThemeContext.Provider>
         </AnimatePresence>
      </>
   )
}
