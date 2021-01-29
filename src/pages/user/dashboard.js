import { useState, useEffect, useContext } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import userProfile from "../../utils/user_profile"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { duration: 0.5 },
   },
   exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
   },
}

export default function Dashboard(props) {
   const getUser = () => userProfile.getUser() || "Loading..."

   return (
      <>
         <Head>
            <title>Dashboard</title>
         </Head>

         <motion.div
            className=""
            style={{ paddingTop: "7rem" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <h1>Dashboard</h1>
            <h2>My name is {getUser().username}</h2>
         </motion.div>
      </>
   )
}
