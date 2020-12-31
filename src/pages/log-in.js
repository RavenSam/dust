import { useState } from "react"
import Head from "next/head"
import Link from "next/link"

// get our fontawesome imports
import { faEye, faEnvelope, faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// StyleSheets
import styles from "../styles/Sign.module.scss"

export default function SignIn() {
   const [showPw, setShowPw] = useState(false)

   return (
      <>
         <Head>
            <title>Log In</title>
         </Head>

         <div className={styles.logIn}>
            <div className={styles.card}>
               <h3 className={styles.cardTitle}>Welcome Back</h3>

               <h4 className={styles.cardSubTitle}>Log In With</h4>

               <div className={styles.socialBtn}>
                  <a href="#">
                     <div>
                        <img src="/google-icon.svg" alt="Sign With Google" />
                     </div>
                  </a>

                  <a href="#">
                     <div>
                        <img src="/facebook-2.svg" alt="Sign With facebook" />
                     </div>
                  </a>
               </div>

               <div className={styles.or}>or</div>

               <form className={styles.form}>
                  <div className={styles.input}>
                     <input type="text" placeholder="Your Email" name="email" />
                     <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div className={styles.input}>
                     <input type={showPw ? "text" : "password"} placeholder="Your Password" name="password" />
                     <FontAwesomeIcon icon={showPw ? faEye : faEyeSlash} onClick={() => setShowPw(!showPw)} />
                  </div>

                  <input type="submit" value="Sign Up" className="btn btn-primary" />
               </form>

               <p>
                  Don't have an account?{" "}
                  <Link href="/sign-up">
                     <a>Sign Up.</a>
                  </Link>
               </p>
            </div>
         </div>
      </>
   )
}
