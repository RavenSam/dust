import Link from "next/link"
import { useRouter } from "next/router"

export default function NotFound() {
   const router = useRouter()

   return (
      <div className="notFound">
         <div className="card">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>The link you clicked may be broken or the page may have been removed or renamed</p>
            <div className="buttons">
               <Link href="/">
                  <a className="btn btn-secondary">Go Home</a>
               </Link>
               <a className="btn btn-primary" onClick={() => router.back()}>
                  Go Back
               </a>
            </div>
         </div>
      </div>
   )
}
