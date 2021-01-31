const UserProfile = (function () {
   let user = null

   const storageName = "UserProfile"

   const getUser = () => {
      // Also set this in cookie/localStorage

      if (typeof window !== "undefined") {
         //  Using SessionStorage
         return JSON.parse(sessionStorage.getItem(storageName))
      }

      return user
   }

   const setUser = (profile) => {
      // Or pull this from cookie/localStorage
      if (typeof window !== "undefined") {
         // Using Session
         sessionStorage.setItem(storageName, JSON.stringify(profile))
      }
   }

   const userLogout = () => {
      if (typeof window !== "undefined") {
         // Using Session
         sessionStorage.clear()
      }
   }

   return {
      getUser,
      setUser,
      userLogout,
   }
})()

export default UserProfile

// export const expir = (hours = 24) => {
//    // Reset when storage is more than 24hours
//    const now = new Date().getTime()

//    const setupTime = sessionStorage.getItem("setupTime")
//    if (setupTime == null) {
//       sessionStorage.setItem("setupTime", now)
//    } else {
//       if (now - setupTime > hours * 60 * 60 * 1000) {
//          sessionStorage.clear()
//          //  sessionStorage.setItem("setupTime", now)
//       }
//    }
// }
