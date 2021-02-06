import Link from "next/link"
import { useRouter } from "next/router"
import * as Icons from "heroicons-react"
import userProfile from "../../utils/user_profile"

import styles from "./NavUser.module.scss"

const tabs = [
   { name: "Dashboard", icon: Icons.AdjustmentsOutline, tab: 1 },
   { name: "Bookmak", icon: Icons.BookmarkOutline, tab: 2 },
   { name: "History", icon: Icons.ClockOutline, tab: 3 },
   { name: "Settings", icon: Icons.CogOutline, tab: 4 },
]

export default function NavUser({ user, setTab, tab }) {
   const path = useRouter().pathname

   return (
      <>
         <div className={`${styles.NavUser} navbar`}>
            <ul>
               {user && (
                  <li className={styles.thumbnail}>
                     <Link href="/">
                        <a>
                           <img src={user.thumbnail} alt="" />
                           <span>{user.username}</span>
                        </a>
                     </Link>
                  </li>
               )}

               {tabs.map((t, index) => (
                  <li key={index} className={`${styles.navItem} ${tab == t.tab && styles.current}`}>
                     <a onClick={() => setTab(t.tab)}>
                        <t.icon />
                        <span>{t.name}</span>
                     </a>
                  </li>
               ))}

               <li className={styles.navItem} onClick={userProfile.userLogout}>
                  <a href="/api/auth/logout">
                     <Icons.LogoutOutline />
                     <span>Logout</span>
                  </a>
               </li>
            </ul>
         </div>
      </>
   )
}
