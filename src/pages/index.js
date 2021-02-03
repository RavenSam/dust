import { useEffect, useState } from "react"
import Head from "next/head"
import userProfile from "../utils/user_profile"
import * as sections from "../components/sections"

import styles from "../styles/Home.module.scss"

export default function Home() {
   return (
      <>
         <Head>
            <title>Home - Dust</title>
         </Head>

         <div className="container">
            <sections.Hero />
         </div>
      </>
   )
}
