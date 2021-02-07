import { useState, useEffect, useContext } from "react"
import { useRouter, userRouter } from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import NavLinks from "./NavLinks"
import GlobalContexts from "../../contexts/GlobalContexts"
import userProfile from "../../utils/user_profile"
import { fromTop } from "../../animations"

// Site Config
import siteConfig from "../../theme/site-config"

// StyleSheets
import styles from "./scss/Header.module.scss"

/**
 *
 * @param {{type | position }}string
 *  - type => the navbar type "light" | "dark" | "sticky"
 *  - type default => light
 */
export default function Header({ type = "themed", position = "absolute" }) {
   // const navTypes = ["themed", "dark", "light", "sticky"]

   const [user, setUser] = useState(null)

   useEffect(() => setUser(userProfile.getUser()), [])

   const [scrolled, setScrolled] = useState(false)
   const { theme } = useContext(GlobalContexts)

   useEffect(() => {
      const onScroll = (e) => (window.scrollY > 50 ? setScrolled(true) : setScrolled(false))

      window.addEventListener("scroll", onScroll)
   }, [scrolled])

   const headerClasses = (type) => {
      return `${styles.header} ${styles[type]} ${type === "sticky" && scrolled && styles.scroll}`
   }

   return (
      <>
         <motion.header
            style={type !== "sticky" && { position }}
            variants={fromTop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={headerClasses(type)}
         >
            <div className={` container ${styles.navContainer}`}>
               <div className={styles.logo}>
                  <Link href="/">
                     <a>
                        <img
                           src={theme === "darkMode" ? siteConfig.logo.logoWhite : siteConfig.logo.logoBlack}
                           alt={siteConfig.name}
                        />
                     </a>
                  </Link>
               </div>

               <NavLinks styles={styles} user={user} />
            </div>
         </motion.header>
      </>
   )
}
