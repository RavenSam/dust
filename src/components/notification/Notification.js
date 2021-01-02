import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
   const rightIcon = (type) => {
      switch (type) {
         case "success":
            return faCheckCircle
         case "error":
            return faTimesCircle
         case "warning":
            return faExclamationTriangle
         case "info":
            return faExclamationCircle
      }
   }

   return (
      <AnimatePresence>
         <motion.div
            className={type}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
         >
            <div>
               <FontAwesomeIcon icon={rightIcon(type)} />
               <span>{msg}</span>
            </div>

            {/* <FontAwesomeIcon icon={faTimes} /> */}
         </motion.div>
      </AnimatePresence>
   )
}
