import { useState, useEffect, useContext } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import userProfile from "../../utils/user_profile"
import GlobalContexts from "../../contexts/GlobalContexts"

import styles from "../../styles/user/Dashboard.module.scss"

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
   const { user } = useContext(GlobalContexts)

   const propUser = JSON.parse(props.user)
   console.log(props.user)

   useEffect(() => {
      if (propUser) {
         userProfile.setUser(propUser)
      }
   }, [userProfile.getUser(), props.user])

   if (!user) {
      return <h1>Loading...</h1>
   }

   return (
      <>
         <Head>
            <title>Dashboard</title>
         </Head>

         <motion.div
            className={styles.dashboard}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <main>
               <h1>Hello Iam {user.username}</h1>

               <div className="text">
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab
                     molestiae earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est
                     expedita quasi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis
                     esse amet, consequuntur non laboriosam voluptatibus. Eos officia sed fugiat odit aut aspernatur
                     voluptates quibusdam, rerum cum necessitatibus eaque fugit, praesentium quam consectetur quis
                     repellendus saepe totam vitae recusandae ad.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab
                     molestiae earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est
                     expedita quasi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis
                     esse amet, consequuntur non laboriosam voluptatibus. Eos officia sed fugiat odit aut aspernatur
                     voluptates quibusdam, rerum cum necessitatibus eaque fugit, praesentium quam consectetur quis
                     repellendus saepe totam vitae recusandae ad.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab
                     molestiae earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est
                     expedita quasi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis
                     esse amet, consequuntur non laboriosam voluptatibus. Eos officia sed fugiat odit aut aspernatur
                     voluptates quibusdam, rerum cum necessitatibus eaque fugit, praesentium quam consectetur quis
                     repellendus saepe totam vitae recusandae ad.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab
                     molestiae earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est
                     expedita quasi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis
                     esse amet, consequuntur non laboriosam voluptatibus. Eos officia sed fugiat odit aut aspernatur
                     voluptates quibusdam, rerum cum necessitatibus eaque fugit, praesentium quam consectetur quis
                     repellendus saepe totam vitae recusandae ad.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab
                     molestiae earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est
                     expedita quasi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis
                     esse amet, consequuntur non laboriosam voluptatibus. Eos officia sed fugiat odit aut aspernatur
                     voluptates quibusdam, rerum cum necessitatibus eaque fugit, praesentium quam consectetur quis
                     repellendus saepe totam vitae recusandae ad.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab
                     molestiae earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est
                     expedita quasi quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis
                     esse amet, consequuntur non laboriosam voluptatibus. Eos officia sed fugiat odit aut aspernatur
                     voluptates quibusdam, rerum cum necessitatibus eaque fugit, praesentium quam consectetur quis
                     repellendus saepe totam vitae recusandae ad.
                  </p>
               </div>
            </main>
         </motion.div>
      </>
   )
}

Dashboard.getInitialProps = async ({ req }) => {
   const user = req.user ? JSON.stringify(req.user) : null
   return { user }
}
