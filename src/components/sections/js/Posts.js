import { Fragment } from "react"
import Author from "../../shared/Author"
import Link from "next/link"
import Carousel from "../../carousel/Carousel"
import { motion } from "framer-motion"

import styles from "../scss/Posts.module.scss"

const container = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         delay: 2,
         duration: 1,
      },
   },
}

export default function Posts({ posts, carousel = false }) {
   const Wraper = carousel ? Carousel : Fragment

   return (
      <motion.section variants={container} initial="hidden" animate="visible" className={styles.postsCarousel}>
         <Wraper items={5} autoWidth>
            {posts.map((post) => (
               <div key={post.id} className={`${styles.post} `}>
                  <Link href={`/post/${post.id}`}>
                     <a>
                        <div className={styles.postImage}>
                           <img src={post.image} alt={post.text} />
                        </div>

                        <div className={styles.postContent}>
                           <h5 className={styles.title}>{post.text}</h5>

                           <Author author={post.owner} />
                        </div>
                     </a>
                  </Link>
               </div>
            ))}
         </Wraper>
      </motion.section>
   )
}
