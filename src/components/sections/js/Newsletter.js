import { useState } from "react"
import { Search } from "heroicons-react"

import styles from "../scss/Newsletter.module.scss"

export default function Newsletter() {
   const [newsletter, setNewsletter] = useState("")

   const handleChange = (e) => setNewsletter(e.target.value)

   return (
      <section className={styles.newsletter}>
         <div className={styles.content}>
            <h2>Stay up to date with our Newsletter</h2>

            <div className={styles.input}>
               <input
                  type="email"
                  placeholder="Email Address"
                  name="newsletter"
                  value={newsletter}
                  onChange={handleChange}
               />
               <Search />
            </div>
         </div>
      </section>
   )
}
