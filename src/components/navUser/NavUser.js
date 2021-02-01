import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import * as Icons from "heroicons-react"
import GlobalContexts from "../../contexts/GlobalContexts"

import styles from "./NavUser.module.scss"

const tabs = [
   { name: "Dashboard", href: "/user/dashboard", icon: Icons.AdjustmentsOutline },
   { name: "Bookmak", href: "/user/bookmark", icon: Icons.BookmarkOutline },
   { name: "History", href: "/user/history", icon: Icons.ClockOutline },
   { name: "Settings", href: "/user/settings", icon: Icons.CogOutline },
]

export default function NavUser() {
   const { user } = useContext(GlobalContexts)

   const path = useRouter().pathname

   return (
      <>
         <div className={`${styles.NavUser} navbar`}>
            <ul>
               {user && (
                  <li className={styles.logo}>
                     <Link href="/">
                        <a>
                           <img src={user.thumbnail} alt="" />
                           <span>{user.username}</span>
                        </a>
                     </Link>
                  </li>
               )}

               {tabs.map((tab, index) => (
                  <li key={index} className={`${styles.navItem} ${path === tab.href && styles.current}`}>
                     <Link href={tab.href}>
                        <a>
                           <tab.icon />
                           <span>{tab.name}</span>
                        </a>
                     </Link>
                  </li>
               ))}

               <li className={styles.navItem}>
                  <a href="/api/auth/logout">
                     <Icons.LogoutOutline />
                     <span>"Logout"</span>
                  </a>
               </li>
            </ul>
         </div>
      </>
   )
}
