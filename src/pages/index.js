import Head from "next/head"
import * as Sections from "../components/sections"
import axios from "axios"
import { fade } from "../animations"

import styles from "../styles/Home.module.scss"

export default function Home({ posts }) {
   return (
      <>
         <Head>
            <title>Home - Dust</title>
         </Head>

         <div className={styles.home} variants={fade} initial="hidden" animate="visible" exit="exit">
            <div className="container">
               <Sections.Hero />
            </div>

            <div className={styles.latest}>
               <h2>Latest</h2>
               <Sections.Posts posts={posts} carousel={true} />
            </div>

            <Sections.PostGrid />

            <Sections.AboutUs />

            <Sections.Newsletter />
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
