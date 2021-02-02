import { useEffect, useContext } from "react"
import Head from "next/head"
import userProfile from "../../utils/user_profile"
import GlobalContexts from "../../contexts/GlobalContexts"

import styles from "../../styles/user/Dashboard.module.scss"

export default function Dashboard({ user }) {
   const { setUser, getUser } = userProfile

   useEffect(() => {
      if (user) {
         setUser(user)
      }
   }, [user])

   if (!user) {
      return <h1>Loading...</h1>
   }

   return (
      <>
         <Head>
            <title>Dashboard</title>
         </Head>

         <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae, tempora nihil ea, a ab molestiae
               earum unde laudantium ex similique error saepe reprehenderit culpa distinctio, est expedita quasi
               quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis esse amet.
            </p>
         </div>
      </>
   )
}

export async function getServerSideProps({ req }) {
   const user = req.user ? JSON.stringify(req.user) : null

   // filter the password from the user
   const useNoPw = Object.fromEntries(Object.entries(JSON.parse(user)).filter(([key, value]) => key !== "password"))

   if (!user) {
      return {
         redirect: {
            destination: "/login",
            permanent: false,
         },
      }
   }

   return {
      props: { user: useNoPw },
   }
}
