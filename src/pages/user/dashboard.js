import { useContext, useEffect } from "react"
import Head from "next/head"
import ThemeContext from "../../contexts/GlobalContexts"
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

export default function Dashboard(props) {
   // const { user, setUser } = useContext(ThemeContext)

   // useEffect(() => {
   //    localStorage.setItem("User", JSON.stringify(props.user))

   //    setUser(props.user)
   // }, [])

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
            {/* <h2>My name is {user.name}</h2> */}
         </motion.div>
      </>
   )
}

Dashboard.getInitialProps = async ({ req }) => {
   const user = req.user || null
   return { user }
}
