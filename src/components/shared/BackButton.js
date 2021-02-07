import Router from "next/router"
import * as Icons from "heroicons-react"

export default function BackButton({ color }) {
   const customStyles = {
      cursor: "pointer",
      color: color || "var(--color-text)",
      height: 35,
      width: 35,
      borderRadius: "50%",
      padding: 7,
   }

   return <Icons.ArrowLeft title="Go Back" style={customStyles} className="backBtn" onClick={() => Router.back()} />
}
