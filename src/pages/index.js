import Head from "next/head"
import styles from "../styles/Home.module.scss"
import { motion } from "framer-motion"

// Animation Options
const containerVariants = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: { duration: 0.5 },
   },
   exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
   },
}

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <motion.div
            className={styles.home}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <div className="container">
               <h1>Welcome</h1>

               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
            </div>
         </motion.div>
      </>
   )
}
