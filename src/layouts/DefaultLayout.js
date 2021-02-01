import React, { useContext, useEffect } from "react"
import GlobalContexts from "../contexts/GlobalContexts"
import { darkMode, lightMode } from "../theme/mode"
import Head from "next/head"
import { useRouter } from "next/router"
import Bus from "../utils/Bus"
import { Flash } from "../components/shared/Flash"
import { motion } from "framer-motion"

import { DashboardDisplay, DefaultDisplay } from "./display"
import siteConfig from "../theme/site-config"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { duration: 0.5 },
   },
   exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
   },
}

export default function DefaultLayout({ children }) {
   const { theme } = useContext(GlobalContexts)

   const path = useRouter().pathname

   useEffect(() => {
      window.flash = (message, type = "success") => Bus.emit("flash", { message, type })
   }, [])

   const display = (path) => {
      const root = path.split("/")[1]

      switch (root) {
         case "user":
            return <DashboardDisplay>{children}</DashboardDisplay>

         default:
            return <DefaultDisplay>{children}</DefaultDisplay>
      }
   }

   return (
      <>
         <Head>
            <style>{theme === "darkMode" ? darkMode : lightMode}</style>
            <link rel="icon" href={siteConfig.favicon} />
         </Head>

         <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {display(path)}
         </motion.div>

         <Flash />
      </>
   )
}
