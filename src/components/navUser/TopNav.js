import { useContext } from "react"
import * as Icons from "heroicons-react"
import GlobalContexts from "../../contexts/GlobalContexts"
import ThemeSwitcher from "../shared/ThemeSwitcher"

import styles from "./NavUser.module.scss"

export default function TopNav({ user }) {
   const { theme } = useContext(GlobalContexts)

   if (!user) {
      return <>...</>
   }

   return (
      <>
         <div className={`${styles.TopNav} `}>
            <ul>
               <div className={styles.NavLeftSide}>
                  <li className={styles.logo}>
                     <img
                        src={theme === "darkMode" ? "/img/logo/vercelW.svg" : "/img/logo/vercel.svg"}
                        alt="Dust Logo"
                     />
                  </li>
               </div>

               <div className={styles.NavRightSide}>
                  <li className={`${styles.navItem} ${styles.active}`}>
                     <Icons.BellOutline />
                  </li>

                  <li className={styles.navItem}>
                     <Icons.ChatOutline />
                  </li>

                  <li className={styles.navItem}>
                     <ThemeSwitcher />
                  </li>

                  {user && (
                     <li className={styles.thumbnail}>
                        <img src={user.thumbnail} alt="" />
                     </li>
                  )}
               </div>
            </ul>
         </div>
      </>
   )
}
