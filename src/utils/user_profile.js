import Cookies from "universal-cookie"

const cookies = new Cookies()

const UserProfile = (function () {
   const storageName = "UserProfile"

   // Return the user stored in cookie return null if no User found
   const getUser = () => cookies.get(storageName) || null

   // Store the user ptofile in a Cookie
   const setUser = (profile) => cookies.set(storageName, profile, { path: "/" })

   // Remove The user profile from the cookie
   const userLogout = () => cookies.remove(storageName)

   return {
      getUser,
      setUser,
      userLogout,
   }
})()

export default UserProfile
