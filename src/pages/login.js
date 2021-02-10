import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import axios from "axios"
import UserProfile from "../utils/user_profile"
import * as Icons from "heroicons-react"
import BackButton from "../components/shared/BackButton"
import Loader from "react-loader-spinner"
import { fadeLeftSpring } from "../animations"

// StyleSheets
import styles from "../styles/Sign.module.scss"

export default function LogIn() {
   const [showPw, setShowPw] = useState(false)
   const [loading, setLoading] = useState(false)

   const router = useRouter()

   // Formik
   const formik = useFormik({
      initialValues: {
         email: "saradow@gmail.com",
         password: "12345678",
      },
      validationSchema: Yup.object({
         email: Yup.string().email("Invalid email format").required("Required!"),
         password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
      }),
      onSubmit: async (values) => {
         try {
            setLoading(true)

            const response = await axios.post("/api/auth/login", values)

            setLoading(false)

            if (response.data.user) {
               // filter the password from the user
               const userNoPw = Object.fromEntries(
                  Object.entries(response.data.user).filter(([key, value]) => key !== "password")
               )

               UserProfile.setUser(userNoPw)

               window.flash(response.data.msg)
               router.replace(response.data.redirectTo)
            } else {
               window.flash("You have entered an invalid username or password", "error")
            }
         } catch (error) {
            setLoading(false)
            if (error.response.data === "Unauthorized") {
               window.flash("You have entered an invalid email or password", "error")
            } else {
               window.flash("Something went wrong", "error")
               console.log(error)
            }
         }
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
               variants={fadeLeftSpring}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               <div className={styles.cardHeader}>
                  <BackButton />

                  <h3 className={styles.cardTitle}>Welcome Back</h3>
               </div>

               <h4 className={styles.cardSubTitle}>Log In With</h4>

               <div className={styles.socialBtn}>
                  <a href="/api/auth/google">
                     <figure>
                        <img src="/google-icon.svg" alt="Sign With Google" />
                     </figure>
                  </a>

                  <a href="/api/auth/github">
                     <figure>
                        <img src="/github-1.svg" alt="Sign With github" />
                     </figure>
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

                     <Icons.MailOutline />
                  </div>
                  {formik.errors.email && formik.touched.email && <p className={styles.error}>{formik.errors.email}</p>}

                  <div className={styles.input}>
                     <input
                        autoComplete="nope"
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

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                     {loading ? <Loader type="Oval" color="#fff" height={20} width={20} /> : "Login"}
                  </button>
               </form>

               <p>
                  Don't have an account?{" "}
                  <Link href="/signup">
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
