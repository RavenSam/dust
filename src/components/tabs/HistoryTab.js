import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import PostList from "../postsDisplay/PostList"
import LoadingPage from "../../components/shared/LoadingPage"
import * as Icons from "heroicons-react"
import Loader from "react-loader-spinner"
import axios from "axios"

export default function HistoryTab({ styles, history }) {
   const [postHistory, setPostHistory] = useState([])
   const [loading, setLoading] = useState(false)

   const router = useRouter()

   const limiter = history.length <= 5 ? history : history.slice(0, 6)
   useEffect(() => {
      const postsData = limiter.map(async (h) => {
         try {
            setLoading(true)
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DUMMY_API_URL}/post/${h.id}`, {
               headers: { "app-id": process.env.NEXT_PUBLIC_DUMMY_API_ID },
            })

            return { post: res.data, date: h.date }
         } catch (err) {
            setLoading(false)
            console.log(err)
         }
      })

      Promise.all(postsData)
         .then((res) => {
            setPostHistory([...postHistory, ...res])
            setLoading(false)
         })
         .catch((err) => console.log(err))
   }, [])

   if (!history || loading) return <LoadingPage />

   const clearHistory = async () => {
      try {
         setLoading(true)
         const { data } = await axios.delete("/api/userInfo/history")

         setLoading(false)
         router.reload()
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         <Head>
            <title>History</title>
         </Head>

         <section>
            <h1>History</h1>

            {postHistory.data && (
               <div className={styles.ctr}>
                  <p>Recent History</p>

                  <button onClick={clearHistory} disabled={loading} style={{ color: "#fff" }}>
                     {loading ? <Loader type="Oval" color="#fff" height={20} width={20} /> : <Icons.Trash />}
                  </button>
               </div>
            )}
         </section>

         {postHistory.data ? <PostList posts={postHistory} /> : <p style={{ textAlign: "center" }}>history is Empty</p>}
      </>
   )
}
