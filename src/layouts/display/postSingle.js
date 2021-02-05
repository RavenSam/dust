import { useState, useEffect } from "react"
import Loader from "react-loader-spinner"

export default function DashboardDisplay({ children }) {
   return (
      <>
         <main>{children}</main>
      </>
   )
}
