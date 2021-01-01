import { useState } from "react"
import { motion } from "framer-motion"

// get our fontawesome imports
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import { faExclamationCircle, faExclamationTriangle, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * - Chose the notification either Success, Error, Warning.
 * - msg is the content of the notification
 * @param {{type: "success" | "error" | "warning" | "info", msg: String}}
 */
export default function Notification({ type, msg }) {
   const [display, setDisplay] = useState("flex")

   const rightIcon = (type) => {
      if (type === "success") return faCheckCircle

      if (type === "error") return faTimesCircle

      if (type === "warning") return faExclamationTriangle

      if (type === "info") return faExclamationCircle
   }

   return (
      <motion.div className={type} style={{ display }}>
         <div>
            <FontAwesomeIcon icon={rightIcon(type)} />
            <span>{msg}</span>
         </div>

         <FontAwesomeIcon icon={faTimes} onClick={() => setDisplay("none")} />
      </motion.div>
   )
}
