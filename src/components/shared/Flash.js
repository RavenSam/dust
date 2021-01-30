import React, { useEffect, useState } from "react"
import Bus from "../../utils/Bus"
import * as Icons from "heroicons-react"
import { motion, AnimatePresence } from "framer-motion"

// Animation Options
const containerVariants = {
   hidden: {
      y: "-10vw",
      x: "-50%",
      opacity: 0,
      scale: 0.3,
   },
   visible: {
      y: "-50%",
      x: "-50%",
      opacity: 1,
      scale: 1,
   },
   exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
   },
}

export const Flash = () => {
   let [visibility, setVisibility] = useState(false)
   let [message, setMessage] = useState("")
   let [type, setType] = useState("")

   useEffect(() => {
      let mounted = true

      Bus.addListener("flash", ({ message, type }) => {
         setVisibility(true)

         setMessage(message)

         setType(type)

         if (mounted) {
            setTimeout(() => {
               setVisibility(false)
            }, 8000)
         }
      })

      return () => (mounted = false)
   }, [])

   return (
      <AnimatePresence>
         {visibility && (
            <motion.div
               className={`alert alert-${type}`}
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <p>{message}</p>

               <span className="close" onClick={() => setVisibility(false)}>
                  <Icons.X />
               </span>
            </motion.div>
         )}
      </AnimatePresence>
   )
}
