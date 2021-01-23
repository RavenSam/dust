import { AnimatePresence } from "framer-motion" // For Animation

// Stylesheets
import "../styles/global.scss"

// Layouts
import DefaultLayout from "../layouts/DefaultLayout"

export default function MyApp({ Component, pageProps, router }) {
   const Layout = Component.Layout ? Component.Layout : DefaultLayout

   return (
      <>
         <AnimatePresence exitBeforeEnter>
            <Layout key={router.route}>
               <Component {...pageProps} />
            </Layout>
         </AnimatePresence>
      </>
   )
}
