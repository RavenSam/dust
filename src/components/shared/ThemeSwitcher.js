import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"

// get our fontawesome imports
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ThemeSwitcher({ styles }) {
   const { theme, setTheme } = useContext(ThemeContext)

   return (
      <button
         className={`${styles.themeSwitcher}`}
         onClick={() => setTheme(theme === "darkMode" ? "lightMode" : "darkMode")}
      >
         <FontAwesomeIcon icon={theme === "darkMode" ? faSun : faMoon} />
      </button>
   )
}
