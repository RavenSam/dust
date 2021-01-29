import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useFormik } from "formik"
import { motion } from "framer-motion"
import * as Yup from "yup"
import axios from "axios"
import Notification from "../components/notification/Notification"
import UserProfile from "../utils/user_profile"

// get our fontawesome imports
import { faEye, faEnvelope, faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
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

export default function SignUp() {
   const [showPw, setShowPw] = useState(false)
   const [showPw2, setShowPw2] = useState(false)
   const [loading, setLoading] = useState(false)

   // Formik
   const formik = useFormik({
      initialValues: {
         username: "",
         email: "",
         password: "",
         password2: "",
      },
      validationSchema: Yup.object({
         username: Yup.string().min(5, "Mininum 5 characters").max(15, "Maximum 15 characters").required("Required!"),
         email: Yup.string().email("Invalid email format").required("Required!"),
         password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
         password2: Yup.string()
            .oneOf([Yup.ref("password")], "Password's not match")
            .required("Required!"),
      }),
      onSubmit: async (values) => {
         try {
            setLoading(true)

            const response = await axios.post("/api/auth/signup", values)
            /* 
            
            Use Flash Later or redirect IDK

             // router.push(response.data.redirect)

            */

            // UserProfile.setUser(response.data.user)
            console.log(response.data)

            setLoading(false)
         } catch (error) {
            console.log(error)
         }
      },
   })

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
                  <a href="/api/auth/google">
                     <div>
                        <img src="/google-icon.svg" alt="Sign With Google" />
                     </div>
                  </a>

                  <a href="/api/auth/github">
                     <div>
                        <img src="/github-1.svg" alt="Sign With github" />
                     </div>
                  </a>
               </div>

               <div className={styles.or}>or</div>

               <form className={styles.form} onSubmit={formik.handleSubmit}>
                  <div className={styles.input}>
                     <input
                        autoComplete="nope"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                     />
                     <FontAwesomeIcon icon={faUser} />
                  </div>
                  {formik.errors.username && formik.touched.username && (
                     <Notification type="error" msg={formik.errors.username} />
                  )}

                  <div className={styles.input}>
                     <input
                        autoComplete="nope"
                        type="text"
                        placeholder="Email"
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
                  <div className={styles.input}>
                     <input
                        type={showPw2 ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="password2"
                        value={formik.values.password2}
                        onChange={formik.handleChange}
                     />
                     <FontAwesomeIcon icon={showPw2 ? faEye : faEyeSlash} onClick={() => setShowPw2(!showPw2)} />
                  </div>
                  {formik.errors.password2 && formik.touched.password2 && (
                     <Notification type="error" msg={formik.errors.password2} />
                  )}

                  <motion.button type="submit" className="btn btn-primary">
                     {loading && <img src="/lo.gif" />}Sign Up
                  </motion.button>
               </form>

               <p>
                  Already have an account?{" "}
                  <Link href="/login">
                     <a>Log In.</a>
                  </Link>
               </p>
            </motion.div>
         </div>
      </>
   )
}
