// StyleSheets
import styles from "./Footer.module.scss"

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <section className="container">
            <div className={styles.explore}>
               <ul>
                  <li>
                     <strong>Explore</strong>
                  </li>
                  <li>
                     <a href="/">Home</a>
                  </li>
                  <li>
                     <a href="/">About</a>
                  </li>
                  <li>
                     <a href="/">Blog</a>
                  </li>
                  <li>
                     <a href="/">Contact</a>
                  </li>
               </ul>
            </div>

            <div className={styles.fellow}>
               <ul>
                  <li>
                     <strong>Fellow</strong>
                  </li>
                  <li>
                     <a href="/">Instagram</a>
                  </li>
                  <li>
                     <a href="/">Twitter</a>
                  </li>
                  <li>
                     <a href="/">LinkedIn</a>
                  </li>
               </ul>
            </div>
            <div className={styles.legal}>
               <ul>
                  <li>
                     <strong>Legal</strong>
                  </li>
                  <li>
                     <a href="/">Terms</a>
                  </li>
                  <li>
                     <a href="/">Privacy</a>
                  </li>
               </ul>
            </div>
         </section>

         <p>&copy; 2020 - {new Date().getFullYear()} Dust. All Rights Reserved.</p>
      </footer>
   )
}
