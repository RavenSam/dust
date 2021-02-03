import { useState, useEffect, useContext } from "react"
import { useRouter, userRouter } from "next/router"
import { motion } from "framer-motion"
import NavLinks from "./NavLinks"
import GlobalContexts from "../../contexts/GlobalContexts"
import userProfile from "../../utils/user_profile"

// Site Config
import siteConfig from "../../theme/site-config"

// StyleSheets
import styles from "./scss/Header.module.scss"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
      y: "-30vw",
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
   },
   exit: {
      opacity: 0,
      y: "-100vw",
      transition: { ease: "easeInOut" },
   },
}

/**
 *
 * @param {{type | position }}string
 *  - type => the navbar type "light" | "dark" | "sticky"
 *  - type default => light
 */
export default function Header({ type, position = "absolute" }) {
   const navTypes = ["themed", "dark", "light", "sticky"]
   type = navTypes.includes(type) ? type : navTypes[0]

   const [user, setUser] = useState(null)

   useEffect(() => setUser(userProfile.getUser()), [])

   const router = useRouter()
   const showLogo = router.pathname !== "/user/dashboard"

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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={headerClasses(type)}
         >
            <div className={` container ${styles.navContainer}`}>
               <div className={styles.logo}>
                  {showLogo && (
                     <a href="index.html">
                        <img
                           src={theme === "darkMode" ? siteConfig.logo.logoWhite : siteConfig.logo.logoBlack}
                           alt={siteConfig.name}
                        />
                     </a>
                  )}
               </div>

               <NavLinks styles={styles} user={user} />
            </div>
         </motion.header>
      </>
   )
}
