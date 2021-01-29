import { useContext } from "react"
import GlobalContexts from "../../contexts/GlobalContexts"

// get our fontawesome imports
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ThemeSwitcher({ styles }) {
   const { theme, setTheme } = useContext(GlobalContexts)

   const togleMode = () => {
      const toggle = theme === "darkMode" ? "lightMode" : "darkMode"

      localStorage.setItem("Mode", JSON.stringify(toggle))

      setTheme(toggle)
   }

   return (
      <button className={`${styles.themeSwitcher}`} onClick={togleMode}>
         <FontAwesomeIcon icon={theme === "darkMode" ? faSun : faMoon} />
      </button>
   )
}
