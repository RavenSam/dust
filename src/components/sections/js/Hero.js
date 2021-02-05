import { useState } from "react"
import * as Icons from "heroicons-react"
import Bubble from "../../shared/Bubble"
import { motion } from "framer-motion"

import styles from "../scss/Hero.module.scss"

export default function Hero() {
   const [search, setSearch] = useState("")

   const handleChange = (e) => setSearch(e.target.value)

   return (
      <section className={styles.hero}>
         <Bubble r="60px" x="20%" y="18%" a="0.8" a="0.5" d="2" />
         <Bubble bg="#ff0c36" r="100px" x="90%" y="20%" a="0.5" d="2.5" />
         <Bubble bg="#009688" r="40px" x="5%" y="90%" a="0.5" d="3" />

         <div className={styles.heroLeft}>
            <motion.h2
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.5, duration: 1 }}
            >
               Break The Code Barrier
            </motion.h2>

            <motion.h5
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.7, duration: 1 }}
            >
               Build better bussiness websiltes, faster, without coding
            </motion.h5>

            <motion.button
               className="btn btn-primary"
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 2, duration: 0.8 }}
            >
               Learn More
            </motion.button>
         </div>

         <div className={styles.heroRight}>
            <motion.h3
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.6, duration: 1 }}
            >
               search your article
            </motion.h3>

            <motion.div
               className={styles.input}
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.9, duration: 1 }}
            >
               <Icons.Search />

               <input type="text" placeholder="Search Article" name="search" value={search} onChange={handleChange} />
            </motion.div>
         </div>
      </section>
   )
}
