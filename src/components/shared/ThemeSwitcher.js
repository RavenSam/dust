import { useContext } from "react"
import GlobalContexts from "../../contexts/GlobalContexts"
import * as Icons from "heroicons-react"
import themeMode from "../../utils/theme_mode"

export default function ThemeSwitcher({ styles }) {
   const { theme, setTheme } = useContext(GlobalContexts)

   const togleMode = () => {
      const mode = theme === "darkMode" ? "lightMode" : "darkMode"

      // Function to store in LoacalStorage
      themeMode.setMode(mode)
      // Context
      setTheme(mode)
   }

   return (
      <button className={styles ? `${styles.themeSwitcher}` : "switcherBtn"} onClick={togleMode}>
         {theme === "darkMode" ? <Icons.SunOutline /> : <Icons.MoonOutline />}
      </button>
   )
}
