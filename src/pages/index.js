import Head from "next/head"
import * as Sections from "../components/sections"
import axios from "axios"
import { fade } from "../animations"
import dummyData from "../../dummyData.json"

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

            <Sections.ContactUs />
         </div>
      </>
   )
}

export async function getServerSideProps(ctx) {
   try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_DUMMY_API_URL}/post?limit=5`, {
         headers: { "app-id": process.env.NEXT_PUBLIC_DUMMY_API_ID },
      })

      // Retun with no error return API DATA
      return {
         props: { posts: data.data },
      }

      // if error return Dummy data
   } catch (err) {
      console.log(err)
      return {
         props: { posts: dummyData },
      }
   }
}
