import { createContext, useState, useEffect } from "react"
import userProfile from "../utils/user_profile"
import themeMode from "../utils/theme_mode"

const GlobalContexts = createContext()

export const GlobalContextProvider = (props) => {
   const [theme, setTheme] = useState("")
   // const [user, setUser] = useState(null)

   useEffect(() => setTheme(themeMode.getMode()), [theme])

   // useEffect(() => setUser(userProfile.getUser()), [userProfile.getUser()])

   return (
      <GlobalContexts.Provider value={{ theme, setTheme /*  user, setUser */ }}>
         {props.children}
      </GlobalContexts.Provider>
   )
}

export default GlobalContexts
