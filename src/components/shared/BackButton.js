import Router from "next/router"
import * as Icons from "heroicons-react"

const customStyles = {
   cursor: "pointer",
   color: "var(--color-text)",
   height: 35,
   width: 35,
   borderRadius: "50%",
   padding: 7,
}

export default function BackButton() {
   return <Icons.ArrowLeft title="Go Back" style={customStyles} className="backBtn" onClick={() => Router.back()} />
}
