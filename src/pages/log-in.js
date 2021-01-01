import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"

// get our fontawesome imports
import { faEye, faEnvelope, faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// StyleSheets
import styles from "../styles/Sign.module.scss"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
      x: "-100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" },
   },
   exit: {
      opacity: 0,
      x: "-100vw",
      transition: { ease: "easeInOut" },
   },
}

export default function SignIn() {
   const [showPw, setShowPw] = useState(false)

   return (
      <>
         <Head>
            <title>Log In</title>
         </Head>

         <div className={styles.logIn}>
            <motion.div
               className={styles.card}
               exit="exit"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
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

               <Link href="/">
                  <a className={styles.forgetPw}>Forget your password?</a>
               </Link>
            </motion.div>
         </div>
      </>
   )
}
