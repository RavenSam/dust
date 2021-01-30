import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Link from "next/link"
import { useFormik } from "formik"
import { motion } from "framer-motion"
import * as Yup from "yup"
import axios from "axios"
import * as Icons from "heroicons-react"
import BackButton from "../components/shared/BackButton"

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

   const router = useRouter()

   // Formik
   const formik = useFormik({
      initialValues: {
         username: "saradow",
         email: "saradow@gmail.com",
         password: "12345678",
         password2: "12345678",
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

            setLoading(false)

            console.log(response.data)

            if (response.data.user) {
               window.flash(response.data.msg)

               router.replace(response.data.redirectTo)
            } else {
               window.flash(response.data.msg, "error")
            }
         } catch (error) {
            console.log(error)
            window.flash("Something went wrong", "error")
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
               <div className={styles.cardHeader}>
                  <BackButton />

                  <h3 className={styles.cardTitle}>Sign up With</h3>
               </div>

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
                     <Icons.UserOutline />
                  </div>
                  {formik.errors.username && formik.touched.username && (
                     <p className={styles.error}>{formik.errors.username}</p>
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
                     <Icons.MailOutline />
                  </div>
                  {formik.errors.email && formik.touched.email && <p className={styles.error}>{formik.errors.email}</p>}
                  <div className={styles.input}>
                     <input
                        type={showPw ? "text" : "password"}
                        placeholder="Your Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                     />

                     {showPw ? (
                        <Icons.EyeOutline onClick={() => setShowPw(!showPw)} />
                     ) : (
                        <Icons.EyeOffOutline onClick={() => setShowPw(!showPw)} />
                     )}
                  </div>
                  {formik.errors.password && formik.touched.password && (
                     <p className={styles.error}>{formik.errors.password}</p>
                  )}
                  <div className={styles.input}>
                     <input
                        type={showPw2 ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="password2"
                        value={formik.values.password2}
                        onChange={formik.handleChange}
                     />
                     {showPw2 ? (
                        <Icons.EyeOutline onClick={() => setShowPw2(!showPw2)} />
                     ) : (
                        <Icons.EyeOffOutline onClick={() => setShowPw2(!showPw2)} />
                     )}
                  </div>
                  {formik.errors.password2 && formik.touched.password2 && (
                     <p className={styles.error}>{formik.errors.password2}</p>
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
