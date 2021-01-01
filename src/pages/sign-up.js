import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import Notification from "../components/notification/Notification"

// get our fontawesome imports
import { faEye, faEnvelope, faUser, faEyeSlash, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// StyleSheets
import styles from "../styles/Sign.module.scss"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
      x: "100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" },
   },
   exit: {
      opacity: 0,
      x: "100vw",
      transition: { ease: "easeInOut" },
   },
}

export default function SignIn() {
   const [showPw, setShowPw] = useState(false)
   const [showPw2, setShowPw2] = useState(false)

   return (
      <>
         <Head>
            <title>Sign Up</title>
         </Head>

         <div className={styles.signUp}>
            <motion.div
               className={styles.card}
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <h3 className={styles.cardTitle}>Sign up With</h3>

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

               <Notification type="success" msg="Error Notification" />
               <Notification type="success" msg="Error Notification" />
               <Notification type="error" msg="Error Notification" />
               <Notification type="warning" msg="Error Notification" />
               <Notification type="info" msg="Error Notification" />

               <form className={styles.form}>
                  <div className={styles.input}>
                     <input type="text" placeholder="Username" name="username" />
                     <FontAwesomeIcon icon={faUser} />
                  </div>

                  <div className={styles.input}>
                     <input type="text" placeholder="Email" name="email" />
                     <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div className={styles.input}>
                     <input type={showPw ? "text" : "password"} placeholder="Your Password" name="password" />

                     <FontAwesomeIcon icon={showPw ? faEye : faEyeSlash} onClick={() => setShowPw(!showPw)} />
                  </div>

                  <div className={styles.input}>
                     <input type={showPw2 ? "text" : "password"} placeholder="Confirm Password" name="password2" />
                     <FontAwesomeIcon icon={showPw2 ? faEye : faEyeSlash} onClick={() => setShowPw2(!showPw2)} />
                  </div>

                  <input type="submit" value="Sign Up" className="btn btn-primary" />
               </form>

               <p>
                  Already have an account?{" "}
                  <Link href="/log-in">
                     <a>Log In.</a>
                  </Link>
               </p>
            </motion.div>
         </div>
      </>
   )
}
