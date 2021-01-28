import { createContext } from "react"

const ThemeContext = createContext({
   // User Login or Not
   user: null,

   // for The Dark/Laught Theme
   theme: "",
   setTheme: () => {},

   // To Display Modal
   displayModal: "none",
   setDisplayModal: () => {},
})

export default ThemeContext
