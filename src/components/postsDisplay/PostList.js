import styles from "./PostList.module.scss"
import Image from "next/image"
import Link from "next/link"
import Moment from "react-moment"
import * as Icons from "heroicons-react"

export default function PostList({ posts }) {
   if (!posts) return
   console.log(posts)
   return (
      <section className={styles.postList}>
         <div className={styles.content}>
            {posts.map((data, index) => (
               <a key={index} className={styles.post}>
                  <figure>
                     <Image src={data.post.image} alt="Post Image" width={150} height={180} />
                  </figure>

                  <div className={styles.info}>
                     <h3>{data.post.text}</h3>

                     {data.date && (
                        <div className={styles.date}>
                           <Icons.ClockOutline />
                           <span>
                              <Moment format="YYYY/MM/DD" date={data.date} />
                           </span>
                        </div>
                     )}

                     <div className={styles.postTags}>
                        {data.post.tags.map((tag) => (
                           <Link key={tag} href={`/tag/${tag}`}>
                              <a>{tag}</a>
                           </Link>
                        ))}
                     </div>
                  </div>
               </a>
            ))}
         </div>
      </section>
   )
}
