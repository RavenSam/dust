const themeMode = (function () {
   let theme = "lightMode"

   const storageName = "Mode"

   const getMode = () => {
      if (typeof window !== "undefined") {
         return JSON.parse(localStorage.getItem(storageName))
      }

      return theme
   }

   const setMode = (mode) => {
      if (typeof window !== "undefined") {
         localStorage.setItem(storageName, JSON.stringify(mode))
      }
   }

   return { getMode, setMode }
})()

export default themeMode
