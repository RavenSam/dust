import Head from "next/head"
import Router from "next/router"
import { useEffect } from "react"
import { motion } from "framer-motion"

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

export default function Dashboard() {
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
         </motion.div>
      </>
   )
}

// Dashboard.getInitialProps = async (ctx) => {
//    let user = JSON.stringify(ctx.req.user) || null

//    return { user }
// }