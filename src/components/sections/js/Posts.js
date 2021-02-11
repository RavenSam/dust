import { Fragment } from "react"
import Author from "../../shared/Author"
import Link from "next/link"
import Image from "next/image"
import Carousel from "../../carousel/Carousel"

import styles from "../scss/Posts.module.scss"

export default function Posts({ posts }) {
   return (
      <section className={styles.postsCarousel}>
         <Carousel items={5} autoWidth>
            {posts.map((post) => (
               <div key={post.id} className={`${styles.post} `}>
                  <Link href={`/post/${post.id}`}>
                     <a>
                        <div className={styles.postImage}>
                           <Image src={post.image} alt={post.text} width={300} height={380} />
                        </div>

                        <div className={styles.postContent}>
                           <h3 className={styles.title}>{post.text}</h3>

                           <Author author={post.owner} />
                        </div>
                     </a>
                  </Link>
               </div>
            ))}
         </Carousel>
      </section>
   )
}
