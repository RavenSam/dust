import { useState, useEffect, useContext } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import UserProfile from "../../utils/user_profile"

import ThemeSwitcher from "../themeSwither/ThemeSwitcher"

const pagesLinks = [{ name: "Home", href: "/" }]

const userLinks = [{ name: "Dashboard", href: "/user/dashboard" }]

const guestLinks = [
   { name: "Sign Up", href: "/signup" },
   { name: "Login", href: "/login" },
]

export default function NavLinks({ user, styles }) {
   const [menuOpen, setMenuOpen] = useState(false)

   const router = useRouter()

   const customCSS = `@media (max-width: 768px) {html{ overflow:hidden; }}`

   const lis = (link) => (
      <li key={link.name}>
         <Link href={link.href}>
            <a className={router.pathname === link.href ? styles.current : "0"}>{link.name}</a>
         </Link>
      </li>
   )

   return (
      <>
         <Head>{menuOpen && <style>{customCSS}</style>}</Head>

         <ul className={`${styles.links} ${menuOpen && styles.open}`}>
            {pagesLinks.map((link) => lis(link))}

            {user && userLinks.map((link) => lis(link))}

            {!user && guestLinks.map((link) => lis(link))}

            <li>
               <Link href="/api/auth/logout">
                  <a onClick={UserProfile.userLogout}>Logout</a>
               </Link>
            </li>

            <div className={styles.btnLs}>
               <ThemeSwitcher styles={styles} />
            </div>
         </ul>

         <div onClick={() => setMenuOpen(!menuOpen)} className={`${styles.burger} ${menuOpen && styles.open}`}>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </>
   )
}
