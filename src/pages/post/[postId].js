import axios from "axios"
import * as Icons from "heroicons-react"
import Link from "next/link"
import { useRouter } from "next/router"
import Moment from "react-moment"

import Author from "../../components/shared/Author"
import LoadingPage from "../../components/shared/LoadingPage"

import styles from "../../styles/SinglePost.module.scss"

export default function Post({ post, comments }) {
   const router = useRouter()

   if (!post) return <LoadingPage />

   // console.log(comments.data)

   return (
      <>
         <div className={styles.post}>
            <div className={styles.content}>
               <nav>
                  <div className="leftSide">
                     <Icons.ArrowLeftOutline onClick={() => router.back()} />
                  </div>
                  <div className="rightSide">
                     <Icons.BookmarkOutline />
                  </div>
               </nav>

               <div className={styles.featuredImg}>
                  <img src={post.image} alt={post.text} />
               </div>

               <div className="container">
                  <div className={styles.postContent}>
                     <h2 className={styles.postTitle}>{post.text}</h2>

                     <div className={styles.postTags}>
                        {post.tags.map((tag) => (
                           <Link key={tag} href={`/tag/${tag}`}>
                              <a>{tag}</a>
                           </Link>
                        ))}
                     </div>

                     <div className={styles.postAuthor}>
                        <Author author={post.owner} />

                        <div className={styles.authorLink}>
                           <Icons.ShareOutline />
                           <Icons.LinkOutline />
                        </div>
                     </div>

                     <div className={styles.postText}>
                        <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime earum dolorem fuga tenetur
                           impedit eum magni dignissimos autem ex necessitatibus et, minima id cumque nesciunt nihil
                           delectus facere.
                        </p>
                        <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime earum dolorem fuga tenetur
                           impedit eum magni dignissimos autem ex necessitatibus et, minima id cumque nesciunt nihil
                           delectus facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime earum
                           dolorem fuga tenetur impedit eum magni dignissimos autem ex necessitatibus et, minima id
                           cumque nesciunt nihil delectus facere.
                        </p>
                        <p>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime earum dolorem fuga tenetur
                           impedit eum magni dignissimos autem ex necessitatibus et, minima id cumque nesciunt nihil
                           delectus facere.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className={styles.comments}>
               <div className="container">
                  {comments.data.length > 0 ? (
                     <>
                        {comments.data.map((cmt) => (
                           <div key={cmt.id} className={styles.comment}>
                              <div className={styles.picture}>
                                 <img src={cmt.owner.picture} alt={`${cmt.owner.firstName} ${cmt.owner.lastName}`} />
                              </div>

                              <div className={styles.cmtContent}>
                                 <h5 className={styles.owner}>
                                    {`${cmt.owner.title} ${cmt.owner.firstName} ${cmt.owner.lastName}`}
                                    <br />
                                    <span>
                                       <Moment format="MMMM DD YYYY">{cmt.publishDate}</Moment>
                                    </span>
                                 </h5>

                                 <p>{cmt.message}</p>
                              </div>
                           </div>
                        ))}
                     </>
                  ) : (
                     <p style={{ textAlign: "center" }}>No Comment Yet</p>
                  )}
               </div>
            </div>
         </div>
      </>
   )
}

export async function getStaticProps({ params }) {
   try {
      const post = await axios.get(`${process.env.DUMMY_API_URL}/post/${params.postId}`, {
         headers: { "app-id": process.env.DUMMY_API_ID },
      })

      const comments = await axios.get(`${process.env.DUMMY_API_URL}/post/${params.postId}/comment`, {
         headers: { "app-id": process.env.DUMMY_API_ID },
      })

      return {
         props: { post: post.data, comments: comments.data },
      }
   } catch (error) {
      return {
         notFound: true,
      }
   }
}

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: true,
   }
}
