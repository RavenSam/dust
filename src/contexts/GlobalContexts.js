import { createContext } from "react"

const ThemeContext = createContext({
   theme: "",
   setTheme: () => {},

   displayModal: "none",
   setDisplayModal: () => {},
})

export default ThemeContext
