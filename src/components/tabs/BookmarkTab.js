import { useEffect, useState } from "react"
import Head from "next/head"
import PostList from "../postsDisplay/PostList"
import LoadingPage from "../../components/shared/LoadingPage"
import axios from "axios"

export default function BookmarkTab({ bm }) {
   const [bookmarks, setBookmarks] = useState([])
   const [loading, setLoading] = useState(false)

   const limiter = bm.length <= 5 ? bm : bm.slice(0, 6)

   useEffect(() => {
      const postsData = limiter.map(async (h) => {
         try {
            setLoading(true)
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DUMMY_API_URL}/post/${h}`, {
               headers: { "app-id": process.env.NEXT_PUBLIC_DUMMY_API_ID },
            })

            return res.data
         } catch (err) {
            setLoading(false)
            console.log(err)
         }
      })

      Promise.all(postsData)
         .then((res) => {
            setBookmarks([...bookmarks, ...res])
            setLoading(false)
         })
         .catch((err) => console.log(err))
   }, [])

   if (!bm || loading) return <LoadingPage />

   return (
      <>
         <Head>
            <title>Bookmark</title>
         </Head>

         <section>
            <h1>Bookmarks</h1>
         </section>

         {bookmarks[0] ? (
            <PostList posts={{ data: bookmarks }} />
         ) : (
            <p style={{ textAlign: "center" }}>Bookmarks is Empty</p>
         )}
      </>
   )
}
