import { useState } from "react"
import * as Icons from "heroicons-react"
import Bubble from "../../shared/Bubble"

import styles from "../scss/Hero.module.scss"

export default function Hero() {
   const [search, setSearch] = useState("")

   const handleChange = (e) => setSearch(e.target.value)

   return (
      <section className={styles.hero}>
         <Bubble r="40px" x="20%" y="5%" a="0.8" a="0.5" />
         <Bubble bg="#ff0c36" r="100px" x="90%" y="20%" a="0.5" />
         <Bubble bg="#009688" r="20px" x="10%" y="90%" a="0.5" />

         <div className={styles.heroLeft}>
            <h2>Break The Code Barrier</h2>

            <h5>Build better bussiness websiltes, faster, without coding</h5>

            <button className="btn btn-primary">Learn More</button>
         </div>

         <div className={styles.heroRight}>
            <h3>search your article</h3>

            <div className={styles.input}>
               <Icons.Search />

               <input type="text" placeholder="Search Article" name="search" value={search} onChange={handleChange} />
            </div>
         </div>
      </section>
   )
}
