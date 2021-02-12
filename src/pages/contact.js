import { ContactUs } from "../components/sections"
import Head from "next/head"

import styles from "../styles/contact.module.scss"

export default function Contact() {
   return (
      <>
         <Head>
            <title>Contact Us</title>
         </Head>

         <section className={styles.contact}>
            <ContactUs />
         </section>
      </>
   )
}
