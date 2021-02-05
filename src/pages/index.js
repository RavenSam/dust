import Head from "next/head"
import * as Sections from "../components/sections"
import axios from "axios"
import { motion } from "framer-motion"

import styles from "../styles/Home.module.scss"

export default function Home({ posts }) {
   return (
      <>
         <Head>
            <title>Home - Dust</title>
         </Head>

         <div className="container">
            <Sections.Hero />
         </div>

         <div className={styles.latest}>
            <motion.h2
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.5, duration: 1 }}
            >
               Latest
            </motion.h2>
            <Sections.Posts posts={posts} carousel={true} />
         </div>
      </>
   )
}

export async function getServerSideProps(ctx) {
   const { data } = await axios.get(`${process.env.DUMMY_API_URL}/post?limit=5`, {
      headers: { "app-id": process.env.DUMMY_API_ID },
   })

   return {
      props: { posts: data.data },
   }
}
