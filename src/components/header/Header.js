import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import ThemeSwitcher from "../themeSwither/ThemeSwitcher"

// Components
import { ButtonModal } from "../modal/Modal"

// StyleSheets
import styles from "./Header.module.scss"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
      y: "-100vw",
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

export default function Header({ position }) {
   const [scrolled, setScrolled] = useState(false)
   const [menuOpen, setMenuOpen] = useState(false)

   const router = useRouter()

   useEffect(() => {
      window.addEventListener("scroll", () => (window.scrollY > 50 ? setScrolled(true) : setScrolled(false)))
   }, [scrolled])

   const links = [
      { name: "Home", href: "/" },
      { name: "Sign Up", href: "/sign-up" },
      { name: "Login", href: "/log-in" },
      { name: "Logout", href: "/api/auth/logout" },
   ]

   return (
      <motion.header
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
         className={`${styles.header} ${position === "sticky" && styles.sticky} ${
            position === "sticky" && scrolled && styles.scroll
         }`}
      >
         <div className={` container ${styles.navContainer}`}>
            <div className={styles.logo}>
               <a href="index.html">
                  <svg width="283" height="64" viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                        fill="#fff"
                     />
                  </svg>
               </a>
            </div>

            <ul className={`${styles.links} ${menuOpen && styles.open}`}>
               {links.map((link) => (
                  <li key={link.name}>
                     <Link href={link.href}>
                        <a className={router.pathname === link.href ? styles.current : undefined}>{link.name}</a>
                     </Link>
                  </li>
               ))}

               <div className={styles.btnLs}>
                  <ButtonModal>Modal</ButtonModal>

                  <ThemeSwitcher styles={styles} />
               </div>
            </ul>

            <div onClick={() => setMenuOpen(!menuOpen)} className={`${styles.burger} ${menuOpen && styles.open}`}>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </motion.header>
   )
}
