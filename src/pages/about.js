import Head from "next/head"
import { AboutUs } from "../components/sections"

import styles from "../styles/about.module.scss"

export default function About() {
   return (
      <>
         <Head>
            <title>About Us</title>
         </Head>

         <section className={styles.about}>
            <AboutUs />
         </section>
      </>
   )
}
