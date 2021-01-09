import { createContext } from "react"

const ThemeContext = createContext({
   theme: "darkMode",
   setTheme: () => {},
})

export default ThemeContext
