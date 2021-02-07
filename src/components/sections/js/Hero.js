import { useState } from "react"
import * as Icons from "heroicons-react"
import { motion } from "framer-motion"

import styles from "../scss/Hero.module.scss"

export default function Hero() {
   const [search, setSearch] = useState("")

   const handleChange = (e) => setSearch(e.target.value)

   return (
      <section className={styles.hero}>
         <div className={styles.heroLeft}>
            <motion.h1
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.5, duration: 0.8 }}
            >
               Break The Code Barrier
            </motion.h1>

            <motion.p
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.7, duration: 0.8 }}
            >
               Build better bussiness websiltes, faster, without coding
            </motion.p>

            <motion.button
               className="btn btn-primary"
               initial={{ y: 80, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 2, duration: 0.8 }}
            >
               Learn More
            </motion.button>
         </div>

         <div className={styles.heroRight}>
            <motion.h2
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.6, duration: 0.8 }}
            >
               search your article
            </motion.h2>

            <motion.div
               className={styles.input}
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.9, duration: 0.8 }}
            >
               <Icons.Search />

               <input type="text" placeholder="Search Article" name="search" value={search} onChange={handleChange} />
            </motion.div>
         </div>
      </section>
   )
}
