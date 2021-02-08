import { useState } from "react"
import Loader from "react-loader-spinner"
import * as Icons from "heroicons-react"

import styles from "../scss/ContactUs.module.scss"

export default function ContactUs() {
   const [loading, setLoading] = useState(false)

   return (
      <section className={styles.contactUs}>
         <h2>Contact Us</h2>

         <div className={styles.contacts}>
            <div className={styles.address}>
               <Icons.LocationMarker />
               <span>California, Santa Ana, 3804 Sunny Day Drive</span>
            </div>

            <div className={styles.phone}>
               <Icons.Phone />
               <span>714-796-7240</span>
            </div>
         </div>

         <div className={styles.content}>
            <div className={styles.leftSide}>
               <h3>Get in Touch</h3>
               <form>
                  <label htmlFor="email">Email Adress</label>
                  <input type="email" name="email" placeholder="johndoe@exemple.com" />

                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" />

                  <label htmlFor="name">Message</label>
                  <textarea name="message" name="message" id="message" cols="30" rows="10"></textarea>
                  <button type="submit" className="btn btn-primary" disabled={loading && "true"}>
                     {loading ? <Loader type="Oval" color="#fff" height={20} width={20} /> : "SUBMIT"}
                  </button>
               </form>
            </div>

            <div className={styles.rightSide}>
               <h3>Reach us Directly</h3>

               <div className={styles.map}>
                  <iframe src="https://maps.google.com/maps?q=42.466905,-96.418833&z=10&output=embed"></iframe>
               </div>
            </div>
         </div>
      </section>
   )
}
