import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

export default function Carousel({ children }) {
   const [display, setDisplay] = useState(false)

   useEffect(() => setDisplay(true), [])

   if (!display) {
      return <>{children}</>
   }

   return (
      <OwlCarousel items={5} autoWidth>
         {children}
      </OwlCarousel>
   )
}
