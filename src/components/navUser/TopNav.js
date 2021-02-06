import { useContext } from "react"
import Link from "next/link"
import * as Icons from "heroicons-react"
import GlobalContexts from "../../contexts/GlobalContexts"
import ThemeSwitcher from "../shared/ThemeSwitcher"

// Site Config
import siteConfig from "../../theme/site-config"

import styles from "./NavUser.module.scss"

export default function TopNav({ user }) {
   const { theme } = useContext(GlobalContexts)

   return (
      <>
         <div className={`${styles.TopNav} `}>
            <ul>
               <div className={styles.NavLeftSide}>
                  <li className={styles.logo}>
                     <Link href="/">
                        <a>
                           <img
                              src={theme === "darkMode" ? siteConfig.logo.logoWhite : siteConfig.logo.logoBlack}
                              alt={siteConfig.name}
                           />
                        </a>
                     </Link>
                  </li>
               </div>

               <div className={styles.NavRightSide}>
                  <li className={`${styles.navItem} ${styles.active}`}>
                     <Icons.Bell />
                  </li>

                  <li className={styles.navItem}>
                     <Icons.Chat />
                  </li>

                  <li className={styles.navItem}>
                     <ThemeSwitcher />
                  </li>

                  {user && (
                     <li className={styles.thumbnail}>
                        <img src={user.thumbnail} alt="User" />
                     </li>
                  )}
               </div>
            </ul>
         </div>
      </>
   )
}
