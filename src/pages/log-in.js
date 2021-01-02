import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import Notification from "../components/notification/Notification"

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

   // Formik
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: Yup.object({
         email: Yup.string().email("Invalid email format").required("Required!"),
         password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
      }),
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2))
      },
   })

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

               <form className={styles.form} onSubmit={formik.handleSubmit}>
                  <div className={styles.input}>
                     <input
                        autoComplete="nope"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                     />

                     <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  {formik.errors.email && formik.touched.email && (
                     <Notification type="error" msg={formik.errors.email} />
                  )}

                  <div className={styles.input}>
                     <input
                        autoComplete="nope"
                        type={showPw ? "text" : "password"}
                        placeholder="Your Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                     />

                     <FontAwesomeIcon icon={showPw ? faEye : faEyeSlash} onClick={() => setShowPw(!showPw)} />
                  </div>
                  {formik.errors.password && formik.touched.password && (
                     <Notification type="error" msg={formik.errors.password} />
                  )}

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
