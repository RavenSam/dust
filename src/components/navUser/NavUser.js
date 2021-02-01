import { useContext } from "react"
import * as Icons from "heroicons-react"
import GlobalContexts from "../../contexts/GlobalContexts"

import styles from "./NavUser.module.scss"

export default function NavUser() {
   const { user } = useContext(GlobalContexts)

   // if (!user) {
   //    return <>...</>
   // }

   return (
      <>
         <div className={`${styles.NavUser} navbar`}>
            <ul>
               {user && (
                  <li className={styles.logo}>
                     <a href="#">
                        <img src={user.thumbnail} alt="" />
                        <span>{user.username}</span>
                     </a>
                  </li>
               )}

               <li className={`${styles.navItem} ${styles.current}`}>
                  <a href="#">
                     <Icons.AdjustmentsOutline />
                     <span>Dashboard</span>
                  </a>
               </li>

               <li className={styles.navItem}>
                  <a href="#">
                     <Icons.UserOutline />
                     <span>user</span>
                  </a>
               </li>

               <li className={styles.navItem}>
                  <a href="#">
                     <Icons.ClockOutline />
                     <span>History</span>
                  </a>
               </li>

               <li className={styles.navItem}>
                  <a href="#">
                     <Icons.BookmarkOutline />
                     <span>Bookmark</span>
                  </a>
               </li>

               <li className={styles.navItem}>
                  <a href="#">
                     <Icons.CogOutline />
                     <span>Setings</span>
                  </a>
               </li>

               <li className={styles.navItem}>
                  <a href="/api/auth/logout">
                     <Icons.LoginOutline />
                     <span>Logout</span>
                  </a>
               </li>
            </ul>
         </div>
      </>
   )
}
